import { onSnapshot } from "firebase/firestore";
import React, { useState , useEffect} from "react";
import {collection,  orderBy, query } from "firebase/firestore";
import {db} from "./firebaseConfigure";
 function Articles(){
    const [articles, setArticles] = useState([]);
    useEffect(() =>{
        const articleRef = collection(db,"Articles");
        const q = query(articleRef, orderBy("createdAt","desc"));
        onSnapshot(q,(snapshot)=>{
           const articles = snapshot.docs.map((doc) =>({
               id: doc.id,
               ...doc.data(),
           }));
           setArticles(articles);
           console.log(articles);
        });
    },[]);
    return (
<div>
   {articles.length === 0 ? (
   <p>No articles trouvé!</p>
   ) : (
      articles.map(({id,titre,description,imageUrl,createdAt}) => (
	    <div className="border mt-3 p-3 bg-light" key={id}>
		   <div className="row">
		       <div className="col-3">
			       <img src ={imageUrl}alt ='titre' style={{height:180,width:180}} />
			   </div>
			   <div className="col-9 ps-3">
			       <h2>{titre}</h2>
				   <p>{createdAt.toDate().toDateString()}</p>
				   <h4>{description}</h4>
			   </div>
		   </div>
		   
		
		
		</div>
      ))
   
      
	 )}
     
</div>
  );
 }      
export default Articles;