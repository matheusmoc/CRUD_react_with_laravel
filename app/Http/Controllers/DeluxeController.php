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

    //update deluxe
    public function getDeluxeUpdateData(Request $request){
        try {
            // dd($request->all());
            $deluxeId = $request->get("deluxeId");
            $deluxeImage = $request->get("deluxeImage");
            $deluxeCar = $request->get("deluxeCar");
            $deluxePrice = $request->get("deluxePrice");
            $deluxeBrand = $request->get('deluxeBrand');
            $deluxePower = $request->get('deluxePower');
            $deluxeSpeed = $request->get('deluxeSpeed');
            $deluxeCons = $request->get('deluxeCons');
            
            Deluxe::where('id', $deluxeId)->update([            
                'deluxe_image' => $deluxeImage,
                'deluxe_car'   => $deluxeCar,
                'deluxe_price' => $deluxePrice,
                'deluxe_brand' => $deluxeBrand,
                'deluxe_power' => $deluxePower,
                'deluxe_speed' => $deluxeSpeed,
                'deluxe_cons'  => $deluxeCons
            ]);
            return response()->json([
                'deluxe_image' => $deluxeImage,
                'deluxe_car'   => $deluxeCar,
                'deluxe_price' => $deluxePrice,
                'deluxe_brand' => $deluxeBrand,
                'deluxe_power' => $deluxePower ,
                'deluxe_speed' => $deluxeSpeed,
                'deluxe_cons'  => $deluxeCons
            ]);

        } catch (Exception $e) {
            Log::error($e);
        }
    }
}
