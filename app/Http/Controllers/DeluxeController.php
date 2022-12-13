<?php

namespace App\Http\Controllers;

use App\Models\Deluxe;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class DeluxeController extends Controller
{
    //get deluxe ride list
    public function getDeluxeRideList(){
        try{
            $deluxes = Deluxe::all();
            return response()->json($deluxes);
        }
        catch(Exception $e){
            Log::error($e);
        }
    }
}
