<?php

namespace App\Traits;

use App\User;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Support\Facades\Auth;

trait BelongsUser
{

    /**
     * Returns the User model which this belongs to
     *
     * @return BelongsTo
     */
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    /**
     * Validates if the authenticated user is the owner
     *
     * @return bool
     */
    public function userLoggedIsOwner(): bool
    {
        return $this->user->is(Auth::user());
    }

    
}
