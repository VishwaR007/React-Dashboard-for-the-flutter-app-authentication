import { useEffect, useState } from 'react';
import { database } from './firebase/config';
import { addDoc, collection, deleteDoc, getDocs, doc, updateDoc } from 'firebase/firestore';

function MainPageTwo() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [notification, setNotification] = useState(0);
  const [id, setId] = useState("");
  const [show, setShow] = useState(false);

  const value = collection(database, "demo");
  const value2 = collection(database, "notification");

  const [readVal, setReadVal] = useState([]);

  const handleCreate = async() => {
    await addDoc(value, {Fname:fname, Lname:lname});
    setFname("");
    setLname("");
  }

  useEffect(() => {
    const getData = async() => {
      const dbVal = await getDocs(value);
      setReadVal(dbVal.docs.map(doc=>({...doc.data(), id:doc.id})))
    }
    getData();
  })

  const handleDelete = async(id) => {
    const deletVal = doc(database, "demo", id);
    await deleteDoc(deletVal);
  }

  const handleEdit = async(id, Fname, Lname) => {
    setFname(Fname);
    setLname(Lname);
    setId(id);
    setShow(true);
  }

  const handleUpdate = async() => {
    // const updateVal=await  updateDoc(doc(database,"demo",id),{Fname : fname , Lname : lname});
    const updateData = doc(database, "demo", id);
    await updateDoc(updateData, {Fname: fname, Lname: lname})
    setShow(false);
    setFname("");
    setLname("");
  }

  const handleNotificationUpdate = async() => {
    const updateNotificationData = doc(database, "notification", 'UNFGWn6FYiL6Z40HdZmZ');
    await updateDoc(updateNotificationData, {isThere: '1'})
    await updateDoc(updateNotificationData, {isThere: '0'})
  }

  return (
    <div className="MainPageTwo">
      <h1>First Project</h1>
      <input value={fname} onChange={(e) => setFname(e.target.value)} />
      <input value={lname} onChange={(e) => setLname(e.target.value)} />
      {!show?<button onClick={handleCreate}>Create</button>:
      <button onClick={handleUpdate}>Update</button>}
      {
        readVal.map(readVals => <div>
          <h1>{readVals.Fname}</h1>
          <h1>{readVals.Lname}</h1>
          <button onClick={()=>handleDelete(readVals.id)}>Delete</button>
          <button onClick={()=>handleEdit(readVals.id, readVals.Fname, readVals.Lname)}>Edit</button>
        </div>)
      }
      <button onClick={handleNotificationUpdate}>Send Notification</button>
    </div>
  );
}

export default MainPageTwo;
