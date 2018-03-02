<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit0be9bc6940cc5981912810d050cba2f3
{
    public static $prefixLengthsPsr4 = array (
        'W' => 
        array (
            'WsdlToPhp\\WsSecurity\\Tests\\' => 27,
            'WsdlToPhp\\WsSecurity\\' => 21,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'WsdlToPhp\\WsSecurity\\Tests\\' => 
        array (
            0 => __DIR__ . '/..' . '/wsdltophp/wssecurity/tests',
        ),
        'WsdlToPhp\\WsSecurity\\' => 
        array (
            0 => __DIR__ . '/..' . '/wsdltophp/wssecurity/src',
        ),
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInit0be9bc6940cc5981912810d050cba2f3::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInit0be9bc6940cc5981912810d050cba2f3::$prefixDirsPsr4;

        }, null, ClassLoader::class);
    }
}
