import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./config/firebase";


export default function ListGroups() {
  
  const[groups, setGroups] = useState([])

  useEffect(() => {
    getGroups()
  }, [])

  useEffect(() => {
    console.log(groups)
  }, [groups])

  
  
  function getGroups() {
    const groupsColletionRef = collection(db, 'abc');
    getDocs(groupsColletionRef)
    .then(response => {
      const gr = response.docs.map(doc => ({data : doc.data(), id : doc.id, }))
      setGroups(gr)
    })
    .catch(error => console.log(error.message))
  }

  return (
    <div>
      <h4>Groups list</h4>
      <ul>
        {groups.map(groups => <li key ={groups.id}>{groups.data.Love}</li>)}
      </ul>
    </div>
  );
}
