<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Contact;

class ContactController extends Controller
{
    public function index()
    {
        $contacts = Contact::all();
        return response()->json($contacts);
    }
    
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email',
            'message' => 'required|string',
        ]);
        Contact::create($validated);
        
        return response()->json(['message' => 'Contact form submitted successfully!'], 200);
    }


    public function destroy($id)
{
    $contact = Contact::find($id); 

    if ($contact) {
        $contact->delete();
        return response()->json(['message' => 'Contact deleted successfully'], 200);
    }

    return response()->json(['message' => 'Contact not found'], 404);
}

    
}
