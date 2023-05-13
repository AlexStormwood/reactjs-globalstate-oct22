import { createContext, useReducer } from "react";

const initialBlogData = [
	{
		id: 1,
		title: "Default Blog Post",
		content: "Create more content to fill out your blog!"
	}
]

const blogReducer = (previousState, instructions) => {
	let stateEditable = [...previousState];

	switch (instructions.type){
		case "update":
			// do some update to previous state
			// return the result;
			return previousState;
		case "delete":
			// do some delete or filter on the previous state
			// copy of existing state since we can't modify it directly
			// stateEditable = [...previousState];
			let targetBlog = instructions.blogIdToDelete;
			// return the result
			return stateEditable.filter(blog => blog.id !== targetBlog);
		case "create":
			// add some data to the previous state
			// return the result;
			return previousState;
		default:
			console.log("Invalid instruction type received, it was: " + instructions.type);
			return previousState;
	}
}

export const BlogDataContext = createContext(null);
export const BlogDispatchContext = createContext(null);

export default function BlogsProvider(props){
	const [blogsData, blogsDispatch] = useReducer(blogReducer, initialBlogData);

	return(
		<BlogDataContext.Provider value={blogsData}>
			<BlogDispatchContext.Provider value={blogsDispatch}>
				{props.children}
			</BlogDispatchContext.Provider>
		</BlogDataContext.Provider>
	)
}
