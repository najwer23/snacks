import styles from './TextBox.module.css';

type TextBoxTag = 'h1' | 'h2' | 'h3' | 'p';

export const TextBox: React.FC<{
  tag?: TextBoxTag;
  children: React.ReactNode;
  href?: string;
  target?: string;
  rel?: string;
  isTitle?: boolean
}> = ({ tag = 'p', children, href, target, rel, isTitle, ...props }) => {
  const Tag = tag;

  const tagClassNames: Record<TextBoxTag, string> = {
    h1: 'heading1',
    h2: 'heading2',
    h3: 'heading3',
    p: 'paragraph',
  };

  if (href) {
    return (
      <Tag className={`${styles[tagClassNames[tag]]} ${isTitle ? styles.isTitle : ""}`}>
        <a href={href} target={target} rel={rel} {...props}>
          {children}
        </a>
      </Tag>
    );
  }

  return (
    <Tag className={`${styles[tagClassNames[tag]]} ${isTitle ? styles.isTitle : ""}`} {...props}>
      {children}
    </Tag>
  );
};

TextBox.displayName = 'TextBox';
