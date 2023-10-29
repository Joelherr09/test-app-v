import React, {useState} from 'react'
import './css/AddArticulo.css'
import { Timestamp, addDoc, collection } from 'firebase/firestore'
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage'
import { db } from '../firebaseConfig'
import { toast } from 'react-toastify'

function AddArticulo() {
    const [formData, setFormData] = useState({
        titulo: "",
        descripcion: "",
        image: "",
        creadoEn: Timestamp.now().toDate(),

    })
    const[progress, setProgress] = useState(0);

    const handleChange = (e) =>{
        setFormData({...formData,[e.target.name]: e.target.value });
    }
    const handleImageChange = (e) =>{
        setFormData({...formData, image: e.target.files[0] });
    }
    const handlePublish = (e) => {
        if (!formData.titulo || !formData.descripcion || !formData.image) {
            alert('Rellena todo');
            return;
        }
        const storageRef = ref(storage, `/images/${Date.now()}${formData.image.name}`)
        const uploadImage = uploadBytesResumable(storageRef, formData.image)

        uploadImage.on("state_changed", (snapshot) => {
            const progressPercent = Math.round(
                (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            )
            setProgress(progressPercent)
        }, (err) => {
            console.log(err)
        },
            () => {
                setFormData({
                    titulo: "",
                    descripcion: "",
                    image: "",
                })
                getDownloadURL(uploadImage.snapshot.ref)
                    .then((url) => {
                        const articleRef = collection(db, "Articulos");
                        addDoc(articleRef, {
                            titulo: formData.titulo,
                            descripcion: formData.descripcion,
                            ImageUrl: url,
                            creadoEn: Timestamp.now().toDate(),
                        })
                            .then(() => {
                                toast("Articulo añadido correctamente", { type: "success" });
                                setProgress(0);
                            })
                            .catch(err => {
                                toast("Error", { type: "error" });
                            })
                    })
            }
        )
    }

  return (
    <div className='cuerpo-crear-articulo'>
        <h2>Crear Artículo</h2>
        <div className="form-articulo">
            <label htmlFor="">Titulo</label>
            <input type="text" name='titulo' value={formData.titulo} onChange={(e)=>handleChange(e)} className='input-titulo-articulo' />

            <label htmlFor="">Descripcion</label>
            <textarea name='descripcion' value={formData.descripcion} onChange={(e)=>handleChange(e)} className='input-titulo-articulo' />

            <label htmlFor="">Image</label>
            <input
             type="file" 
             name='image'
             accept='image/*' 
             onChange={(e)=>handleImageChange(e)} 
             className='input-titulo-articulo' />

            {progress === 0 ? null : (
                <div className="progress">
                    <div className="progress-bar progress-bar-striped mt-2" style={{width: `${progress}%`}}>
                        {`subiendo imagen ${progress}%`}
                    </div>
                </div>
            )}

            <button className="btn-crear-articulo" onChange={(e)=>handlePublish(e)} >Publicar</button>
        </div>
    </div>
  )
}

export default AddArticulo