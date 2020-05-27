import { prisma } from "../../../../generated/prisma-client";

export default {
	Query: {
		seeUser: async (_, args) => {
			const { username } = args;
			const posts = await prisma.user({ username }).posts();
			return await prisma.user({ username });
		},
	},
};
