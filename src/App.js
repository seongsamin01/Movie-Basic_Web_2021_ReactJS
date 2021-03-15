import React from "react";

function Food({ name, picture }) {
   return (
      <div>
         <h2>I like {name}</h2>
         <img src={picture} />
      </div>
      );
}

const foodILike = [
   {
      name: "파스타",
      image: "https://recipe1.ezmember.co.kr/cache/recipe/2019/04/01/f8b3042c80a214dd7cc60fa2027cdc9d1.jpg"
   },
   {
      name: "낙곱새",
      image: "https://t1.daumcdn.net/cfile/tistory/9988FE415E3C3DB021"
   },
   {
      name: "갈비",
      image: "https://s3-ap-northeast-1.amazonaws.com/dcreviewsresized/20200609084507_photo1_887ca96cced2.jpg"
   },
   {
      name: "스시",
      image: "https://s3-ap-northeast-1.amazonaws.com/dcreviewsresized/20181209122546_photo1_77513f8dd560.jpg"
   },
   {
      name: "삼겹살",
      image: "http://ojsfile.ohmynews.com/STD_IMG_FILE/2017/0719/IE002190922_STD.JPG"
   }
];

function App() {
   return(
      <div>
         {foodILike.map(dish => (
            <Food name={dish.name} picture={dish.image} />
         ))}
         
      </div>
     );
       
 }

export default App;
