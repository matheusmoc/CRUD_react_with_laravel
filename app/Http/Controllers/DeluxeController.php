<?php

namespace App\Http\Controllers;

use App\Models\Deluxe;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class DeluxeController extends Controller
{
    //Get deluxe ride list
    public function getDeluxeRideList()
    {
        try {
            $deluxes = Deluxe::orderBy('id', 'DESC')->get();
            return response()->json($deluxes);
        } catch(Exception $e) {
            Log::error($e);
        }
    }

    //Get deluxe ride datails
    public function getDeluxeRideDetails(Request $request)
    {
        try {
            $deluxeData = Deluxe::findOrFail($request->get('deluxeId'));
            return response()->json($deluxeData);
        } catch(Exception $e) {
            Log::error($e);
        }
    }

    //update deluxe
    public function getDeluxeUpdateData(Request $request)
    {
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
                'image' => $deluxeImage,
                'car'   => $deluxeCar,
                'price' => $deluxePrice,
                'brand' => $deluxeBrand,
                'power' => $deluxePower,
                'speed' => $deluxeSpeed,
                'cons'  => $deluxeCons
            ]);
            return response()->json([
                'image' => $deluxeImage,
                'car'   => $deluxeCar,
                'price' => $deluxePrice,
                'brand' => $deluxeBrand,
                'power' => $deluxePower ,
                'speed' => $deluxeSpeed,
                'cons'  => $deluxeCons
            ]);
        } catch (Exception $e) {
            Log::error($e);
        }
    }

    //delete data
    public function getDeluxeDestroyData(Deluxe $deluxe)
    {
        try {
            $deluxe->delete();
        } catch(Exception $e) {
            Log::error($e);
        }
    }

    public function getDeluxeStoreData(Request $request){
        try {

            $deluxeImage = $request->get("deluxeImage");
            $deluxeCar = $request->get("deluxeCar");
            $deluxePrice = $request->get("deluxePrice");
            $deluxeBrand = $request->get('deluxeBrand');
            $deluxePower = $request->get('deluxePower');
            $deluxeSpeed = $request->get('deluxeSpeed');
            $deluxeCons = $request->get('deluxeCons');

            Deluxe::create([
                'image' => $deluxeImage,
                'car'   => $deluxeCar,
                'price' => $deluxePrice,
                'brand' => $deluxeBrand,
                'power' => $deluxePower,
                'speed' => $deluxeSpeed,
                'cons'  => $deluxeCons
            ]);

            return response()->json([
                'image' => $deluxeImage,
                'car'   => $deluxeCar,
                'price' => $deluxePrice,
                'brand' => $deluxeBrand,
                'power' => $deluxePower ,
                'speed' => $deluxeSpeed,
                'cons'  => $deluxeCons
            ]);

        } catch (Exception $e) {
            Log::error($e);
        }
    }
}
