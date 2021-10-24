import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import "../firebase"
import { db, storage } from "../firebase"


import { collection, getDocs, orderBy } from "firebase/firestore"
import { ref, getDownloadURL } from "firebase/storage"
const Project = () => {
  const [projects, setProjects] = useState([])
  const [img, setImg] = useState("")

  const projectsRef = collection(db, "project")
  useEffect(() => {
    const getProjects = async () => {
      const data = await getDocs(projectsRef)
      setProjects(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    }
    getProjects()

    const imgRef =ref(storage,'photo.jpeg')
    const getImg= async()=>{
      await getDownloadURL(ref(storage,'photo.jpeg')).then((url)=>{
      console.log(url)
      setImg(url)
    })
  }
  getImg()

  }, [])

  return (
    <section id='project' className='section section-project'>
      <img className='test' src={img} />
      <h2 className='title'>Project</h2>
      <ul className='list list_project'>
        {projects.map((project) => (
          <li key={project.id} data={project.id}>
            <Link
              className='link link_project'
              to={{
                pathname: "/project",
                projectProps: {
                  id: project.id,
                  name: project.name,
                  text: project.text,
                  tech: project.tech,
                },
              }}
            >
              {project.name}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Project
