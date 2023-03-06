<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database~ for WordPress */
define( 'DB_NAME', 'egry' );

/** Database username */
define( 'DB_USER', 'Kanex' );

/** Database password */
define( 'DB_PASSWORD', 'mboti1Dem' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'CA!Ar<ghI4D,8VLOXb-z}^j*~<}>a.$Bpii@m5i)OABp)Ryt7~wxHi?(0rToXN?5' );
define( 'SECURE_AUTH_KEY',  '#PFI:q$p7)7T[t!2X(`Z>y.JE@@_X`EHqD )YRMQ[-E(9S24b@,^WT@FS::AmORp' );
define( 'LOGGED_IN_KEY',    'OV|:ZI])V+A}I-e*n_:yaIBE -QncsxE91[b)or5`Yra%Y<xpc|bO-Ftu89H~j)/' );
define( 'NONCE_KEY',        'MMT3v4QMUgbBXFJbM5}6KYa13&@Z`IH%{g~z^y6D=%g!wDZ$F0&TYOv-Vu1+UPYC' );
define( 'AUTH_SALT',        'ELtxHO@{l^$*wqY%vwy.O6xd,!,`4:JZf}xF6Z`:&w<=GV8fx2mk)bETlhm_lO T' );
define( 'SECURE_AUTH_SALT', ']r|rg*[LRe75[N!Z1GOF*@FSw#ze?K&85]i.oy[|WC/=W?*X994k@].lqNQL]4t6' );
define( 'LOGGED_IN_SALT',   ']6I_4n^4>aCfZo)ydqf-K[Q:r}F,o6HV+}$#ZFWaT@Uo^_b0>7/s50A3tI%|&#b^' );
define( 'NONCE_SALT',       'Hf!@Z717%_a/QMV$r/T)a8Y*-2AK,ND6:ixR!<MqC)] Qdpt@}|_jN[G/Km2NRX.' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
