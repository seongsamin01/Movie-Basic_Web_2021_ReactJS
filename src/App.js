import React from "react";
import PropTypes from "prop-types";

const foodILike = [
   {  
      id: 1,
      name: "파스타",
      image: "https://recipe1.ezmember.co.kr/cache/recipe/2019/04/01/f8b3042c80a214dd7cc60fa2027cdc9d1.jpg",
      rating: 4.1
   },
   {  
      id: 2,
      name: "낙곱새",
      image: "https://t1.daumcdn.net/cfile/tistory/9988FE415E3C3DB021",
      rating: 4.3
   },
   {  
      id: 3,
      name: "갈비",
      image: "https://s3-ap-northeast-1.amazonaws.com/dcreviewsresized/20200609084507_photo1_887ca96cced2.jpg",
      rating: 4.8
   },
   {  
      id: 4,
      name: "스시",
      image: "https://s3-ap-northeast-1.amazonaws.com/dcreviewsresized/20181209122546_photo1_77513f8dd560.jpg",
      rating: 4.7
   },
   {  
      id: 5,
      name: "삼겹살",
      image: "http://ojsfile.ohmynews.com/STD_IMG_FILE/2017/0719/IE002190922_STD.JPG",
      rating: 4.6
   }
];

function Food({ name, picture, rating }) {
   return (
      <div>
         <h2>I like {name}</h2>
         <h4>{rating}/5.0</h4>
         <img src={picture} alt={name} />
      </div>
      );
}

Food.propTypes = {
   name: PropTypes.string.isRequired,
   picture: PropTypes.string.isRequired,
   rating: PropTypes.number.isRequired
};

function App() {
   return (
   <div>
      {foodILike.map(dish => (
         <Food 
         key= {dish.id}
         name={dish.name}
         picture={dish.image}
         rating={dish.rating} />
      ))}
      </div>
      
      );    
}

export default App;
