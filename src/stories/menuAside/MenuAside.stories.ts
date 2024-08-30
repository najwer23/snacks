import type { StoryObj } from "@storybook/react";

import { MenuAside } from "./MenuAside";
import { MenuTypes } from "../menu/Menu.types";

const meta = {
	title: "najwer23.github.io/MenuAside",
	component: MenuAside,
	tags: ["autodocs"],
	argTypes: {},
};

export default meta;

type Story = StoryObj<typeof meta>;

const MENU_ASIDE: MenuTypes = {
	menuItems: [
		[
			{
				menuTitle: "Menu",
				items: [
					{
						itemLink: "#",
						itemLinkText: "Test",
						itemLinkType: "hash",
					},
					{
						itemLink: "",
						itemLinkText: "Home",
						itemLinkType: "hash",
					},
					{
						itemLink: "gallery",
						itemLinkText: "Gallery",
						itemLinkType: "hash",
					},
					{
						itemLink: "quotes",
						itemLinkText: "Quotes",
						itemLinkType: "hash",
					},
					{
						itemLink: "weather",
						itemLinkText: "Weather",
						itemLinkType: "hash",
					},
					{
						itemLink: "apod",
						itemLinkText: "NASA - APOD",
						itemLinkType: "hash",
					},
					{
						itemLink: "contact",
						itemLinkText: "Contact",
						itemLinkType: "hash",
					},
					{
						itemLink: "404",
						itemLinkText: "404",
						itemLinkType: "hash",
					},
				],
			},
			{
				menuTitle: "Projects",
				items: [
					{
						itemLink: "https://leetcode.com/najwer23/",
						itemLinkText: "Leetcode",
						itemLinkType: "linkOut",
					},
					{
						itemLink: "https://najwer23.github.io/react-redux-ts/",
						itemLinkText: "Geometric figures",
						itemLinkType: "linkOut",
					},
					{
						itemLink: "https://najwer23.github.io/sudoku/",
						itemLinkText: "Sudoku",
						itemLinkType: "linkOut",
					},
					{
						itemLink: "https://jabber.cyclic.app/",
						itemLinkText: "Jabber",
						itemLinkType: "linkOut",
					},
					{
						itemLink:
							"https://najwer23.github.io/najwer23storybook/?path=/docs/getting-started--docs",
						itemLinkText: "Design system",
						itemLinkType: "linkOut",
					},
					{
						itemLink: "https://restilo.pl/",
						itemLinkText: "Restilo",
						itemLinkType: "linkOut",
					},
					{
						itemLink: "https://tueuropa.pl/ubezpieczenia-mieszkania-i-domu.htm",
						itemLinkText: "My house",
						itemLinkType: "linkOut",
					},
					{
						itemLink:
							"https://tueuropa.pl/ubezpieczenia-sportowe/ubezpieczenie-nnw-sport.htm",
						itemLinkText: "Active in Sport",
						itemLinkType: "linkOut",
					},
					{
						itemLink:
							"https://tueuropa.pl/ubezpieczenia-zycia-i-zdrowia/ubezpieczenie-twojego-zdrowia-myhealth.htm",
						itemLinkText: "My Health",
						itemLinkType: "linkOut",
					},
					{
						itemLink: "https://tueuropa.pl/ubezpieczenia-turystyczne.htm",
						itemLinkText: "Itravel",
						itemLinkType: "linkOut",
					},
					{
						itemLink: "https://tvn.pl/programy/top-model",
						itemLinkText: "TVN. Top Model",
						itemLinkType: "linkOut",
					},
					{
						itemLink: "https://tvn.pl/program-tv",
						itemLinkText: "TVN. Electronic program guide",
						itemLinkType: "linkOut",
					},
					{
						itemLink: "https://tvn24.pl/",
						itemLinkText: "TVN24",
						itemLinkType: "linkOut",
					},
					{
						itemLink: "https://tvn24.pl/biznes/notowania/waluty",
						itemLinkText: "TVN24. Stock quotes",
						itemLinkType: "linkOut",
					},
					{
						itemLink: "https://tvn24.pl/wybory-samorzadowe-2024",
						itemLinkText: "TVN24. Polish Local Government Elections 2024",
						itemLinkType: "linkOut",
					},
				],
			},
		],
	],
};

export const Default: Story = {
	args: {
		...MENU_ASIDE,
	},
};
