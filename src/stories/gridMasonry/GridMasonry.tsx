import { useEffect, useState } from 'react';
import styles from './GridMasonry.module.css';
import { GridMasonryColumn } from './GridMasonryColumn';
import { useWindowSize } from '../hooks';

interface ChildrenMasonry {
  name: string;
  arrWithElm: React.ReactNode[];
  height: number;
}

export const GridMasonry: React.FC<{
  children: React.ReactNode[];
  gap: {
    col: string;
    row: string;
  };
  col: {
    mobile: number;
    smallDesktop: number;
    desktop: number;
    tablet: number;
  };
  delay?: number;
  onGridMasonryLoadEnd?: (isGridMasonryLoadEnd: boolean) => void;
}> = ({ children, gap, col, onGridMasonryLoadEnd, delay = 0 }): JSX.Element => {
  const [itemCnt, setItemCnt] = useState<number>(0);
  const { width } = useWindowSize();

  const getNumberOfColumns = (width: number) => {
    if (width < 767.98) {
      return col.mobile;
    }

    if (width >= 768.98 && width < 1199.98) {
      return col.tablet;
    }

    if (width >= 1199.98 && width < 1599.98) {
      return col.smallDesktop;
    }

    if (width >= 1599.98) {
      return col.desktop;
    }

    return 3 as never;
  };

  const [numberOfColumns, setNumberOfColumns] = useState<number>(() => {
    return getNumberOfColumns(width);
  });

  const initChildrenMasonry = (numberOfColumns: number) => {
    return Array.from({ length: numberOfColumns }).map((_, i) => {
      return {
        name: `col${i}`,
        arrWithElm: [],
        height: 0,
      };
    });
  };

  const [childrenMasonry, setChildrenMasonry] = useState<ChildrenMasonry[]>(() => {
    return initChildrenMasonry(numberOfColumns);
  });

  const getChildNameWithMinHeight = (childrenMasonry: ChildrenMasonry[]) => {
    return [...childrenMasonry].sort((a, b) => a.height - b.height)[0].name;
  };

  const onHeightChange = (height: number, name: string) => {
    setChildrenMasonry(
      childrenMasonry.map((value) => {
        return value.name === name
          ? {
              ...value,
              height,
            }
          : value;
      }),
    );
  };

  useEffect(() => {
    // too fast to see changes, so lets do small delay
    const timeoutId = setTimeout(() => {
      if (getNumberOfColumns(width) != numberOfColumns) {
        setItemCnt(0);
        setNumberOfColumns(getNumberOfColumns(width));
        setChildrenMasonry(initChildrenMasonry(getNumberOfColumns(width)));
      }
    }, 100);

    return () => clearTimeout(timeoutId);
  }, [width]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (itemCnt < children.length) {
        const childNameWithMinHeight = getChildNameWithMinHeight(childrenMasonry);
        setChildrenMasonry(
          childrenMasonry.map((value) => {
            return value.name === childNameWithMinHeight
              ? {
                  ...value,
                  arrWithElm: [...value.arrWithElm, children[itemCnt]],
                }
              : value;
          }),
        );
        setItemCnt((itemCnt) => itemCnt + 1);

        if (itemCnt == children.length - 1) {
          if (onGridMasonryLoadEnd) {
            onGridMasonryLoadEnd(true);
          }
        }
      }
    }, delay); // could be 0, but with 40 there is cool loading animation

    return () => clearTimeout(timeoutId);
  }, [JSON.stringify(childrenMasonry.map(({ height }) => height))]);

  return (
    <div
      className={styles.masonryContainer}
      style={
        {
          '--col-mobile': col.mobile,
          '--col-tablet': col.tablet,
          '--col-small-desktop': col.smallDesktop,
          '--col-desktop': col.desktop,
          '--col-gap': gap.col,
          '--row-gap': gap.row,
        } as React.CSSProperties
      }>
      {childrenMasonry.map(({ arrWithElm, name }) => (
        <GridMasonryColumn
          key={'parent' + name}
          arrWithChildren={arrWithElm}
          onHeightChange={(height) => onHeightChange(height, name)}
          id={name}
        />
      ))}
    </div>
  );
};

GridMasonry.displayName = 'GridMasonry';
