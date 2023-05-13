import { useReducer, useState } from "react";


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

	// return [
	// 	{
	// 		id: 1,
	// 		title: "Some title",
	// 		content: "Some content goes here"
	// 	}
	// ]
}


export default function BlogsList(props){

	// const [exampleBlogState, setExampleBlogState] = useState();

	const [blogState, blogDispatch] = useReducer(blogReducer, initialBlogData);

	return (
		<div>
			<h1>Blog Posts:</h1>
			{blogState.map((blogPost) => {
				//<BlogIndividualDisplay />
				return(
					<div key={blogPost.id}>
						<h1>{blogPost.title}</h1>
						<p>{blogPost.content}</p>
						<button onClick={() => blogDispatch({type:"delete", blogIdToDelete: blogPost.id})} >
							Delete blog post
						</button>
					</div>
				);
			})}
		</div>
	)

}