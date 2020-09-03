<?php

namespace App\Traits;

use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;


trait HasUuid
{

    public function getRouteKeyName()
    {
        return 'uuid';
    }

    static function bootHasUuid()
    {
        static::creating(function ($model) {
            $model->uuid = self::generateUuid();
        });
    }

    static function generateUuid()
    {
        $uuid = Str::uuid();

        while (self::findByUuid($uuid) !== null) {
            $uuid = Str::uuid();
        }

        return $uuid;
    }

    static function findByUuid(string $uuid)
    {
        return self::whereUuid($uuid)->first() ?? null;
    }
}
