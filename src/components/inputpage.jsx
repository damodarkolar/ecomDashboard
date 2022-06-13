import {useState} from "react"

export default function InputPage(){
const [productData, setProductData]=useState(
    {
    id:"" ,
    title:"" ,
    gender:"" ,
    price: "",
    category:"",
    image:""
}
)
const {title, price, category, image,id, gender }=productData
const Handlechange=(e)=>{
const {name, value}=e.target;


setProductData({...setProductData , [name] : value})
console.log(productData)
}

const HandleSubmit=async (e) => {
    e.preventDefalut()
    let data= await fetch(`http://localhost:3000/`,
    method="post"
    body:productData,
    Headers={

    });
    let res=await data.json
    
}



return (
    <>
    <div>
        <h1>Product Details form</h1>
        <br />
        <form action="">
            <input type="text" placeholder="title"  name="title" onChange={Handlechange}/>
        <br />
        <input type="text" placeholder="price"  name="price" onChange={Handlechange}/>
        <br />
        <input type="text" placeholder="category"   name="category" onChange={Handlechange}/>
        <br />
        <input type="text" placeholder="image Url"   name="image" onChange={Handlechange}/>
        <br />
        <select name="gender" onChange={Handlechange}>
            <option value="select">select</option>
            <option value="male"  >Male</option>
            <option value="female" >Female</option>
        </select>
        <br />
        <input type="submit" value="add" onSubmit={HandleSubmit}/>
        </form>
        

    </div>
    </>
)


}