import { db } from "./firebase.config"
import { useState, useEffect } from "react"
import {
  collection,
  onSnapshot,
  doc,
  addDoc,
  deleteDoc
} from "firebase/firestore";
import "./Departements.css";




function Departements() {
  const [filières, setFilières] = useState([])
  const [form, setForm] = useState({
    titre: "",
    desc: "",
    compétences: [],
    objectifs: [],
  })
  const [popupActive, setPopupActive] = useState(false)

  const filièresCollectionRef = collection(db, "filières")

  useEffect(() => {
    onSnapshot(filièresCollectionRef, snapshot => {
      setFilières(snapshot.docs.map(doc => {
        return {
          id: doc.id,
          viewing: false,
          ...doc.data()
        }
      }))
    })
  }, [])

  const handleView = id => {
    const filièresClone = [...filières]

    filièresClone.forEach(filière => {
      if (filière.id === id) {
        filière.viewing = !filière.viewing
      } else {
        filière.viewing = false
      }
    })

    setFilières(filièresClone)
  }

  const handleSubmit = e => {
    e.preventDefault()

    if (
      !form.titre ||
      !form.desc ||
      !form.compétences ||
      !form.objectifs
    ) {
      alert("Svp remplasser toutes les champs")
      return
    }

    addDoc(filièresCollectionRef, form)

    setForm({
      titre: "",
      desc: "",
      compétences: [],
      objectifs: []
    })

    setPopupActive(false)
  }

  const handleCompétences = (e, i) => {
    const compétencesClone = [...form.compétences]

    compétencesClone[i] = e.target.value

    setForm({
      ...form,
      compétences: compétencesClone
    })
  }

  const handleObjectif = (e, i) => {
    const objectifsClone = [...form.objectifs]

    objectifsClone[i] = e.target.value

    setForm({
      ...form,
      objectifs: objectifsClone
    })
  }

  const handleCompétenceCount = () => {
    setForm({
      ...form,
      compétences: [...form.compétences, ""]
    })
  }

  const handleObjectifCount = () => {
    setForm({
      ...form,
      objectifs: [...form.objectifs, ""]
    })
  }

  const supprimerFilière = id => {
    deleteDoc(doc(db, "filières", id))
  }

  return (
    <div className="Departements">
      <h1>Filières</h1>

      <button onClick={() => setPopupActive(!popupActive)}>Ajouter filière</button>

      <div className="filières">
        { filières.map((filière, i) => (
          <div className="filière" key={filière.id}>
            <h3>{ filière.titre }</h3>

            <p dangerouslySetInnerHTML={{ __html: filière.desc }}></p>

            { filière.viewing && <div>
              <h4>Compétences</h4>
              <ul>
                { filière.compétences.map((compétence, i) => (
                  <li key={i}>{ compétence }</li>
                ))}
              </ul>

              <h4>Objectifs</h4>
              <ol>
                { filière.objectifs.map((objectif, i) => (
                  <li key={i}>{ objectif }</li>
                ))}
              </ol>
            </div>}

            <div className="buttons">
              <button onClick={() => handleView(filière.id)}>View { filière.viewing ? 'less' : 'more' }</button>
              <button className="supprimer" onClick={() =>supprimerFilière(filière.id)}>Supprimer</button>
            </div>
          </div>
        ))}
      </div>

      { popupActive && <div className="popup">
        <div className="popup-inner">
          <h2>Ajouter une nouvelle filière</h2>

          <form onSubmit={handleSubmit}>

            <div className="form-group">
              <label>Titre</label>
              <input 
                type="text" 
                value={form.titre} 
                onChange={e => setForm({...form, titre: e.target.value})} />
            </div>

            <div className="form-group">
              <label>Description</label>
              <textarea 
                type="text" 
                value={form.desc} 
                onChange={e => setForm({...form, desc: e.target.value})} />
            </div>

            <div className="form-group">
              <label>Compétences</label>
              {
                form.compétences.map((compétence, i) => (
                  <input 
                    type="text"
                    key={i}
                    value={compétence} 
                    onChange={e => handleCompétences(e, i)} />
                ))
              }
              <button type="button" onClick={handleCompétenceCount}>Ajouter une compétence</button>
            </div>

            <div className="form-group">
              <label>Objectifs</label>
              {
                form.objectifs.map((objectif, i) => (
                  <textarea 
                    type="text"
                    key={i}
                    value={objectif} 
                    onChange={e => handleObjectif(e, i)} />
                ))
              }
              <button type="button" onClick={handleObjectifCount}>Ajouter un objectif</button>
            </div>

            <div className="buttons">
              <button type="submit">Submit</button>
              <button type="button" class="supprimer" onClick={() => setPopupActive(false)}>Fermer</button>
            </div>

          </form>
        </div>
      </div>}
    </div>
  );
}

export default Departements;