<?php

namespace App\Http\Controllers;

use App\Models\Deluxe;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class DeluxeController extends Controller
{
    //Get deluxe ride list
    public function getDeluxeRideList(){
        try{
            $deluxes = Deluxe::orderBy('id', 'DESC')->get();
            return response()->json($deluxes);
        }
        catch(Exception $e){
            Log::error($e);
        }
    }

    //Get deluxe ride datails
    public function getDeluxeRideDetails( Request $request){
        try{
            $deluxeData = Deluxe::findOrFail($request->get('deluxeId'));
            return response()->json($deluxeData);
        }
        catch(Exception $e){
            Log::error($e);
        }
    }
}
