import React from "react";
import { Reglog } from "../../../assets";
import "./blogItem.scss";

const BlogItem = () => {
  return (
    <div className="blog-item">
      <img className="image-thumb" src={Reglog} alt="post" />
      <div className="content-detail">
        <p className="title">Title Blog</p>
        <p className="author">Author - Date post</p>
        <p className="body">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, quis.
          Non dignissimos labore voluptatum, corrupti, vitae assumenda deserunt
          perferendis consectetur sed esse odio neque, repellendus quae
          consequuntur veritatis nihil deleniti dolores modi eligendi incidunt
          nostrum suscipit. Soluta consequuntur, consectetur, quisquam iure
          porro velit amet officiis temporibus sequi fugit necessitatibus id.
        </p>
      </div>
    </div>
  );
};

export default BlogItem;
