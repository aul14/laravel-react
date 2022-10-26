<?php

namespace App\Http\Controllers;

use App\Http\Resources\NewsCollection;
use App\Models\News;
use Inertia\Inertia;
use Illuminate\Http\Request;

class NewsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $news = new NewsCollection(News::orderByDesc('id')->paginate(10));

        return Inertia::render('HomePage', [
            'title'          => 'Cuy News',
            'description'    => 'Selamat datang di web portal berita',
            'news'           => $news
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validateData = $request->validate([
            'title'     => 'required',
            'description'     => 'required',
            'category'     => 'required',
        ]);

        $validateData['author'] = auth()->user()->email;

        News::create($validateData);

        return redirect()->back()->with('message', 'New saved succesfully');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\News  $news
     * @return \Illuminate\Http\Response
     */
    public function show(News $news)
    {
        $myNews = $news->where('author', auth()->user()->email)->orderByDesc('id')->get();
        return Inertia::render('Dashboard', [
            'title'          => 'Cuy News',
            'myNews'           => $myNews
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\News  $news
     * @return \Illuminate\Http\Response
     */
    public function edit(News $news, Request $request)
    {
        return Inertia::render('EditNews', [
            'myNews'    => $news->find($request->id)
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\News  $news
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, News $news)
    {
        $validateData = $request->validate([
            'title'     => 'required',
            'description'     => 'required',
            'category'     => 'required',
        ]);

        $validateData['author'] = auth()->user()->email;

        News::where('id', $request->id)->update($validateData);

        return to_route('dashboard')->with('message', 'New updated succesfully');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\News  $news
     * @return \Illuminate\Http\Response
     */
    public function destroy(News $news)
    {
        //
    }
}
