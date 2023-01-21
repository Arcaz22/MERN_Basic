import React from "react";
import { Reglog } from "../../assets";
import { Gap, Link } from "../../components";
import "./detail.blog.scss";
import { navigate, useNavigate } from "react-router-dom";

const DetailBlog = () => {
  const navigate = useNavigate();
  return (
    <div className="detail-blog-wrapper">
      <Gap height={20} />
      <img className="img-cover" src={Reglog} alt="thumb" />
      <p className="blog-title">Title Blog</p>
      <p className="blog-author">Author - Date Post</p>
      <p className="blog-body">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quidem
        recusandae perspiciatis quam quis harum quod aliquid repellat alias
        soluta esse itaque, maiores repellendus et quisquam qui velit libero vel
        expedita, saepe sunt error ipsa? Officiis doloremque a dolorum,
        molestias inventore laborum suscipit ea deserunt quidem incidunt.
        Minima, eos blanditiis?
      </p>
      <Gap height={20} />
      <Link title="Kembali ke Home" onClick={() => navigate("/")} />
    </div>
  );
};

export default DetailBlog;
