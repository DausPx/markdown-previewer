import React from "react";
import "./App.css";
import Card from "./components/Card";

const App: React.FC = () => {
  return (
    <div className="p-24 flex flex-wrap items-center justify-center">
      <Card type="rounded" color='red' imgUrl='https://restorandoha.rs/wp-content/uploads/2020/02/logo-bez-poyadine.png'/>
      <Card type="rounded" color='blue' imgUrl='http://www.medcaffe.rs/img/logo.png'/>
      <Card type="rounded" color='green' imgUrl='https://i.pinimg.com/originals/79/f2/02/79f202b2a76562b279f5002533b1ef4e.png'/>

      <Card type="box" color='red' imgUrl='https://restorandoha.rs/wp-content/uploads/2020/02/logo-bez-poyadine.png'/>
      <Card type="box" color='blue' imgUrl='http://www.medcaffe.rs/img/logo.png'/>
      <Card type="box" color='green' imgUrl='https://i.pinimg.com/originals/79/f2/02/79f202b2a76562b279f5002533b1ef4e.png'/>
    </div>
  );
};

export default App;
