<?php

namespace App\Http\Controllers;

use App\Models\Todo;
use Illuminate\Http\Request;

class TodoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $todos = Todo::all();
        return response()->json(
            $todos,
            200
        );
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $todo = Todo::create($request->all());
        return response()->json(
            $todo,
            201
        );
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        if (Todo::where('id', $id)->exists()) {
            $todo = Todo::where('id', $id)->get()->toJson(JSON_PRETTY_PRINT);
            return response($todo, 200);
        } else {
            return response()->json([
                "message" => "Todo not found"
            ], 404);
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $update = [
            'done' => $request->done
        ];
        $todo = Todo::where('id', $id)->update($update);
        $todos = Todo::all();
        if ($todo) {
            return response()->json(
                $todos,
                200
            );
        } else {
            return response()->json([
                'message' => 'Todo not found',
            ], 404);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $todo = Todo::where('id', $id)->delete();
        if ($todo) {
            return response()->json([
                'message' => 'Todo deleted successfully',
            ], 200);
        } else {
            return response()->json([
                'message' => 'Todo not found',
            ], 404);
        }
    }
}
