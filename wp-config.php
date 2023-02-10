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
/** The name of the database for WordPress */
define( 'DB_NAME', 'egry_engineering' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '@aksu2015' );

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
define( 'AUTH_KEY',         'tOTi;#V_4TY%I{;Dy>Uv^dA .[%fP2fsRI_B#N*o;E9Cifu2WJCT/&k4[}C6:TzY' );
define( 'SECURE_AUTH_KEY',  '[U0!YeCvOBw.[WB6vRnQjAMKn?k@?|vr{n`*pZXI~knNV>Yf6bBGa7}M*-xS(GLs' );
define( 'LOGGED_IN_KEY',    'y^a!({[&gl|n^0aGih*J%9Pk60#Y9VmuW5j<paTtGKT1{oJ$DSl,Gev#g/`YMLNQ' );
define( 'NONCE_KEY',        'rZY.;~R<&~K^4?~b.pv`1E|53G=vY*tdwv]U[L?n0#0Kb7*K(eTM0&,q-dV%Jj8<' );
define( 'AUTH_SALT',        'q0+qN6xYj{{_>(7&d*:Rn|?O~LJG5K57aC!bR!(]5V= .ISwFP;kPs$HjZ9>}pVN' );
define( 'SECURE_AUTH_SALT', 'Gzr)cW%U+llwhcBu<c_jF70|VK-qH/2K9(9|WUOF!)N@w5>bPeSC34%&;aqVQjzl' );
define( 'LOGGED_IN_SALT',   '@_z[?0GU>2=4;f{Lc*S~u]sAvAGeO=wV?qe*>ia=DKm]UrQx?vJsZ(u>(Ob5SDTD' );
define( 'NONCE_SALT',       'ya*!uboH59bW*4Fb3dX6c+t5N3T*E{rD4g@TY&:NL@7zD4^`LKX!ZxMh6[H]!1@7' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'egry_';

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


// @ini_set('upload_max_size' , '256M' );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
