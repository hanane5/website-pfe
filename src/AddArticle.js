import { Timestamp, collection, addDoc } from 'firebase/firestore';
import React, {useState} from 'react';
import {ref, uploadBytesResumable, getDownloadURL} from 'firebase/storage';
import  {storage, db} from './firebaseConfigure';
import { toast } from 'react-toastify';
 function AddArticle() {
    const [formData, setFormData] = useState({
        titre: "",
        description: "",
        image: "",
        createdAt:Timestamp.now().toDate(),
    });
    const[progress,setProgress] =useState(0);
    const handleChange=(e)=>{
        setFormData({...formData, [e.target.name]:e.target.value });
    };
    const handleImageChange=(e)=>{
        setFormData({...formData, image:e.target.files[0]});
    };
    const handlePublish = ()=> {
        if(!formData.titre || !formData.description || !formData.image){
            alert('svp remplissez toutes les champs');
            return;
        }
        const storageRef = ref(storage, `/images/${Date.now()}${formData.image.name}`);
        const uploadImage = uploadBytesResumable(storageRef , formData.image)
        uploadImage.on("state_changed",
        (snapshot)=>{
            const progressPercent =  Math.round((snapshot.bytesTransferred /snapshot.totalBytes) *100);
            setProgress(progressPercent);
        },
        (err)=>{
            console.log(err);
        },
        ()=>{
            setFormData({
                titre: "",
                description: "",
                image: "",
            });
            getDownloadURL(uploadImage.snapshot.ref)
            .then((url=>{
                const articleRef = collection(db, "Articles");
                addDoc(articleRef, {
                    titre: formData.titre,
                    description: formData.description,
                    imageUrl: url,
                    createdAt: Timestamp.now().toDate(),
                })
                .then(()=>{
                    toast("Evenement est ajouté avec succes",{type:"success"});
                    setProgress(0);
                })
                .catch(err=>{
                    toast("Erreur pour ajouter un evenement", {type: "error"});
                });
            }))
        }

        );
    };
    return (
        <div className='border p-3 mt-3 bg-light' style={{position:"fixed"}}>
            <h2>Ajouter un événement</h2>
            <label htmlFor="">Titre</label>
            <input type="text" name="titre" className="form-control" value={formData.titre} onChange={(e)=>handleChange(e)}/>
            {/* description */}
               <label htmlFor="">Description</label>
               <textarea name="description" className="form-control" value={formData.description} onChange={(e)=>handleChange(e)} />
               {/* image */}
               <label htmlFor=""> Image</label>
               <input type="file" name="image" accept="image/*" className="form-control" onChange={(e)=>handleImageChange(e)}/>
            {progress === 0 ? null : (
               <div className="progress">
               <div className="progress-bar progress-bar-striped mt-2" style={{width: `${progress}%`}}>
                   {`uploading image ${progress}%`}
               </div>
            </div> 
            )}
               
               
               
               
                <button  className="form-control btn-primary mt-2" onClick={handlePublish}>Publish</button>
        </div>
    )
};
export default AddArticle;