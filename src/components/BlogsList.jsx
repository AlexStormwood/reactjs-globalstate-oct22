import { useContext, useReducer, useState } from "react";
import { BlogDataContext, BlogDispatchContext } from "./BlogsContextComponent";


export default function BlogsList(props){

	// const [exampleBlogState, setExampleBlogState] = useState();

	//const [blogState, blogDispatch] = useReducer(blogReducer, initialBlogData);

	//    DataToAccess = useContext(DataBluePrint)
	const blogsData = useContext(BlogDataContext)
	const blogsDispatch = useContext(BlogDispatchContext);

	return (
		<div>
			<h1>Blog Posts:</h1>
			{blogsData.map((blogPost) => {
				//<BlogIndividualDisplay />
				return(
					<div key={blogPost.id}>
						<h1>{blogPost.title}</h1>
						<p>{blogPost.content}</p>
						<button onClick={() => blogsDispatch({type:"delete", blogIdToDelete: blogPost.id})} >
							Delete blog post
						</button>
					</div>
				);
			})}
		</div>
	)

}