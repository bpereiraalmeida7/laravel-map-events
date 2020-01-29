<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Event;

class EventController extends Controller
{
    public function search($param)
    {
        $event = Event::select('event')->where('event', 'like', '' . $param . '%')->get();
        return json_encode($event);
    }

    public function storeEvent(Request $request)
    {
        $event = Event::insert([
            "event"       => $request->event, 
            "timestamp"   => new \Datetime()
        ]);
        return json_encode($event);
    }

    public function timeline(Request $request)
    {
        $json_data = json_decode(file_get_contents('https://storage.googleapis.com/dito-questions/events.json'));
        
        return ($json_data->events);
    }
}
