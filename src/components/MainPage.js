import React from "react";
import { database } from "../firebase/config";
// import {collection,
//   getDocs,
//   doc,
//   updateDoc,
//   onSnapshot,
//   where,
//   query,
// } from "firebase/firestore";
import { collection, getDocs, doc, updateDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import "./MainPage.css";

const MainPage = () => {
  const value = collection(database, "users");
  const [readVal, setReadVal] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const dbVal = await getDocs(value);
      setReadVal(dbVal.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getData();
  });

  // const q = query(collection(database, "users"), where("Name", "==", "Vishwa"));
  // onSnapshot(q, { includeMetadataChanges: true }, (snapshot) => {
  //   snapshot.docChanges().forEach((change) => {
  //     if (change.type === "added") {
  //       console.log("New city: ", change.doc.data());
  //     }

  //     const source = snapshot.metadata.fromCache ? "local cache" : "server";
  //     console.log("Data came from " + source);
  //   });
  // });

  const handleNotificationUpdate = async () => {
    const updateNotificationData = doc(
      database,
      "notification",
      "2WmCbt0HxKLL7cqowGus"
    );
    await updateDoc(updateNotificationData, { isThere: "1" });
    await updateDoc(updateNotificationData, { isThere: "0" });
  };
  return (
    <div className="mainContainer">
      <h1>Recat Dashboard</h1>
      <table>
        <thead>
          <th>Name</th>
          <th>Email</th>
          <th>Password</th>
        </thead>
        <tbody>
          {readVal.map((readVals) => (
            <tr>
              <td>{readVals.Name}</td>
              <td>{readVals.Email}</td>
              <td>{readVals.Password}</td>
            </tr>
          ))}
        </tbody>
        {/* <tbody>
          <tr>
            <td>Vinay</td>
            <td>Vinay</td>
            <td>Vinay</td>
          </tr>
          <tr>
            <td>Vinay</td>
            <td>Vinay</td>
            <td>Vinay</td>
          </tr>
        </tbody> */}
      </table>
      <button className="NotificationButton" onClick={handleNotificationUpdate}>
        Send Notification
      </button>
    </div>
  );
};

export default MainPage;
