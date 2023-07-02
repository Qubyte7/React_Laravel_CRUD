<?php

namespace App\Http\Controllers;
use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function add_product(Request $request){
        $product = new Product();
        $product->name = $request->name;
        $product->description = $request->description;
       if($request->photo!=""){
        $strpos = strpos($request->photo,';');
        $sub = substr($request->photo,0,$strpos);
        $ex = explode('/',$sub)[1];
        $name = time().".".$ex;
        $img = Image::make($request->photo->resize(117,100));

       }





    }
}
