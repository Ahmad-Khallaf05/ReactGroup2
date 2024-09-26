-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 26, 2024 at 10:05 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `laravel-react`
--

-- --------------------------------------------------------

--
-- Table structure for table `contacts`
--

CREATE TABLE `contacts` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `message` text NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `contacts`
--

INSERT INTO `contacts` (`id`, `name`, `email`, `message`, `created_at`, `updated_at`) VALUES
(2, 'Ahmad', 'ahmadmajedkhallaf470@gmail.com', 'asdfafd', '2024-09-26 04:04:02', '2024-09-26 04:04:02');

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) NOT NULL,
  `connection` text NOT NULL,
  `queue` text NOT NULL,
  `payload` longtext NOT NULL,
  `exception` longtext NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_reset_tokens_table', 1),
(3, '2019_08_19_000000_create_failed_jobs_table', 1),
(4, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(5, '2024_09_25_162841_create_tasks_table', 1),
(6, '2024_09_25_184129_create_contacts_table', 1);

-- --------------------------------------------------------

--
-- Table structure for table `password_reset_tokens`
--

CREATE TABLE `password_reset_tokens` (
  `email` varchar(255) NOT NULL,
  `token` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `token` varchar(64) NOT NULL,
  `abilities` text DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `tasks`
--

CREATE TABLE `tasks` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `title` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `progress` int(11) NOT NULL,
  `deadline` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `tasks`
--

INSERT INTO `tasks` (`id`, `title`, `description`, `progress`, `deadline`, `created_at`, `updated_at`) VALUES
(2, 'Kevon Mitchell MD', 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus, consectetur vitae quas consequuntur voluptatem quo iure possimus dignissimos nostrum. Dolorum dolor nisi id earum deleniti quasi accusamus distinctio! Consequuntur, beatae!', 25, '1/10/2024', '2024-09-26 03:44:28', '2024-09-26 03:44:28'),
(3, 'Lucienne Schimmel', 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus, consectetur vitae quas consequuntur voluptatem quo iure possimus dignissimos nostrum. Dolorum dolor nisi id earum deleniti quasi accusamus distinctio! Consequuntur, beatae!', 25, '1/10/2024', '2024-09-26 03:44:28', '2024-09-26 03:44:28'),
(4, 'Deon Fay', 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus, consectetur vitae quas consequuntur voluptatem quo iure possimus dignissimos nostrum. Dolorum dolor nisi id earum deleniti quasi accusamus distinctio! Consequuntur, beatae!', 25, '1/10/2024', '2024-09-26 03:44:28', '2024-09-26 03:44:28'),
(5, 'Cali Wolf', 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus, consectetur vitae quas consequuntur voluptatem quo iure possimus dignissimos nostrum. Dolorum dolor nisi id earum deleniti quasi accusamus distinctio! Consequuntur, beatae!', 25, '1/10/2024', '2024-09-26 03:44:28', '2024-09-26 03:44:28'),
(6, 'Prof. Murphy Stiedemann', 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus, consectetur vitae quas consequuntur voluptatem quo iure possimus dignissimos nostrum. Dolorum dolor nisi id earum deleniti quasi accusamus distinctio! Consequuntur, beatae!', 25, '1/10/2024', '2024-09-26 03:44:28', '2024-09-26 03:44:28'),
(7, 'Prof. Tiana Hauck', 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus, consectetur vitae quas consequuntur voluptatem quo iure possimus dignissimos nostrum. Dolorum dolor nisi id earum deleniti quasi accusamus distinctio! Consequuntur, beatae!', 25, '1/10/2024', '2024-09-26 03:44:28', '2024-09-26 03:44:28'),
(8, 'Amira Price', 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus, consectetur vitae quas consequuntur voluptatem quo iure possimus dignissimos nostrum. Dolorum dolor nisi id earum deleniti quasi accusamus distinctio! Consequuntur, beatae!', 25, '1/10/2024', '2024-09-26 03:44:28', '2024-09-26 03:44:28'),
(9, 'Melvina Bergstrom', 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus, consectetur vitae quas consequuntur voluptatem quo iure possimus dignissimos nostrum. Dolorum dolor nisi id earum deleniti quasi accusamus distinctio! Consequuntur, beatae!', 25, '1/10/2024', '2024-09-26 03:44:28', '2024-09-26 03:44:28'),
(10, 'Lisa Walsh', 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus, consectetur vitae quas consequuntur voluptatem quo iure possimus dignissimos nostrum. Dolorum dolor nisi id earum deleniti quasi accusamus distinctio! Consequuntur, beatae!', 25, '1/10/2024', '2024-09-26 03:44:28', '2024-09-26 03:44:28'),
(11, 'Theodora Klocko', 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus, consectetur vitae quas consequuntur voluptatem quo iure possimus dignissimos nostrum. Dolorum dolor nisi id earum deleniti quasi accusamus distinctio! Consequuntur, beatae!', 25, '1/10/2024', '2024-09-26 03:44:28', '2024-09-26 03:44:28'),
(12, 'Otis Johns', 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus, consectetur vitae quas consequuntur voluptatem quo iure possimus dignissimos nostrum. Dolorum dolor nisi id earum deleniti quasi accusamus distinctio! Consequuntur, beatae!', 25, '1/10/2024', '2024-09-26 03:44:28', '2024-09-26 03:44:28'),
(13, 'Tobin Schowalter', 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus, consectetur vitae quas consequuntur voluptatem quo iure possimus dignissimos nostrum. Dolorum dolor nisi id earum deleniti quasi accusamus distinctio! Consequuntur, beatae!', 25, '1/10/2024', '2024-09-26 03:44:28', '2024-09-26 03:44:28'),
(14, 'Miss Shannon Hilpert Sr.', 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus, consectetur vitae quas consequuntur voluptatem quo iure possimus dignissimos nostrum. Dolorum dolor nisi id earum deleniti quasi accusamus distinctio! Consequuntur, beatae!', 25, '1/10/2024', '2024-09-26 03:44:28', '2024-09-26 03:44:28'),
(15, 'Arno Champlin', 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus, consectetur vitae quas consequuntur voluptatem quo iure possimus dignissimos nostrum. Dolorum dolor nisi id earum deleniti quasi accusamus distinctio! Consequuntur, beatae!', 25, '1/10/2024', '2024-09-26 03:44:28', '2024-09-26 03:44:28'),
(16, 'Eleonore Schroeder', 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus, consectetur vitae quas consequuntur voluptatem quo iure possimus dignissimos nostrum. Dolorum dolor nisi id earum deleniti quasi accusamus distinctio! Consequuntur, beatae!', 25, '1/10/2024', '2024-09-26 03:44:28', '2024-09-26 03:44:28'),
(17, 'Joy Howell I', 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus, consectetur vitae quas consequuntur voluptatem quo iure possimus dignissimos nostrum. Dolorum dolor nisi id earum deleniti quasi accusamus distinctio! Consequuntur, beatae!', 25, '1/10/2024', '2024-09-26 03:44:28', '2024-09-26 03:44:28'),
(18, 'Gonzalo Rowe', 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus, consectetur vitae quas consequuntur voluptatem quo iure possimus dignissimos nostrum. Dolorum dolor nisi id earum deleniti quasi accusamus distinctio! Consequuntur, beatae!', 25, '1/10/2024', '2024-09-26 03:44:28', '2024-09-26 03:44:28'),
(19, 'Miss Valentina Little I', 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus, consectetur vitae quas consequuntur voluptatem quo iure possimus dignissimos nostrum. Dolorum dolor nisi id earum deleniti quasi accusamus distinctio! Consequuntur, beatae!', 25, '1/10/2024', '2024-09-26 03:44:28', '2024-09-26 03:44:28'),
(20, 'Mrs. Nina Abshire', 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus, consectetur vitae quas consequuntur voluptatem quo iure possimus dignissimos nostrum. Dolorum dolor nisi id earum deleniti quasi accusamus distinctio! Consequuntur, beatae!', 25, '1/10/2024', '2024-09-26 03:44:28', '2024-09-26 03:44:28'),
(21, 'Elliot Ziemann', 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus, consectetur vitae quas consequuntur voluptatem quo iure possimus dignissimos nostrum. Dolorum dolor nisi id earum deleniti quasi accusamus distinctio! Consequuntur, beatae!', 25, '1/10/2024', '2024-09-26 03:44:28', '2024-09-26 03:44:28'),
(22, 'Margaretta Okuneva', 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus, consectetur vitae quas consequuntur voluptatem quo iure possimus dignissimos nostrum. Dolorum dolor nisi id earum deleniti quasi accusamus distinctio! Consequuntur, beatae!', 25, '1/10/2024', '2024-09-26 03:44:28', '2024-09-26 03:44:28'),
(23, 'Ashton Deckow Sr.', 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus, consectetur vitae quas consequuntur voluptatem quo iure possimus dignissimos nostrum. Dolorum dolor nisi id earum deleniti quasi accusamus distinctio! Consequuntur, beatae!', 25, '1/10/2024', '2024-09-26 03:44:28', '2024-09-26 03:44:28'),
(24, 'Mr. Marquis Witting', 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus, consectetur vitae quas consequuntur voluptatem quo iure possimus dignissimos nostrum. Dolorum dolor nisi id earum deleniti quasi accusamus distinctio! Consequuntur, beatae!', 25, '1/10/2024', '2024-09-26 03:44:28', '2024-09-26 03:44:28'),
(25, 'Ahmad Schaefer', 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus, consectetur vitae quas consequuntur voluptatem quo iure possimus dignissimos nostrum. Dolorum dolor nisi id earum deleniti quasi accusamus distinctio! Consequuntur, beatae!', 25, '1/10/2024', '2024-09-26 03:44:28', '2024-09-26 03:44:28'),
(26, 'Prof. Allen Christiansen', 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus, consectetur vitae quas consequuntur voluptatem quo iure possimus dignissimos nostrum. Dolorum dolor nisi id earum deleniti quasi accusamus distinctio! Consequuntur, beatae!', 25, '1/10/2024', '2024-09-26 03:44:28', '2024-09-26 03:44:28'),
(27, 'Dr. Cale Wisoky', 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus, consectetur vitae quas consequuntur voluptatem quo iure possimus dignissimos nostrum. Dolorum dolor nisi id earum deleniti quasi accusamus distinctio! Consequuntur, beatae!', 25, '1/10/2024', '2024-09-26 03:44:28', '2024-09-26 03:44:28'),
(28, 'Chandler Gorczany IV', 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus, consectetur vitae quas consequuntur voluptatem quo iure possimus dignissimos nostrum. Dolorum dolor nisi id earum deleniti quasi accusamus distinctio! Consequuntur, beatae!', 25, '1/10/2024', '2024-09-26 03:44:28', '2024-09-26 03:44:28'),
(29, 'Prof. Kendall Yundt MD', 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus, consectetur vitae quas consequuntur voluptatem quo iure possimus dignissimos nostrum. Dolorum dolor nisi id earum deleniti quasi accusamus distinctio! Consequuntur, beatae!', 25, '1/10/2024', '2024-09-26 03:44:28', '2024-09-26 03:44:28'),
(30, 'Bell Lehner', 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus, consectetur vitae quas consequuntur voluptatem quo iure possimus dignissimos nostrum. Dolorum dolor nisi id earum deleniti quasi accusamus distinctio! Consequuntur, beatae!', 25, '1/10/2024', '2024-09-26 03:44:28', '2024-09-26 03:44:28'),
(31, 'Miss Felipa Huel', 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus, consectetur vitae quas consequuntur voluptatem quo iure possimus dignissimos nostrum. Dolorum dolor nisi id earum deleniti quasi accusamus distinctio! Consequuntur, beatae!', 25, '1/10/2024', '2024-09-26 03:44:28', '2024-09-26 03:44:28'),
(32, 'Reginald Eichmann', 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus, consectetur vitae quas consequuntur voluptatem quo iure possimus dignissimos nostrum. Dolorum dolor nisi id earum deleniti quasi accusamus distinctio! Consequuntur, beatae!', 25, '1/10/2024', '2024-09-26 03:44:28', '2024-09-26 03:44:28'),
(33, 'Loma Rohan DDS', 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus, consectetur vitae quas consequuntur voluptatem quo iure possimus dignissimos nostrum. Dolorum dolor nisi id earum deleniti quasi accusamus distinctio! Consequuntur, beatae!', 25, '1/10/2024', '2024-09-26 03:44:28', '2024-09-26 03:44:28'),
(34, 'Edward Heaney', 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus, consectetur vitae quas consequuntur voluptatem quo iure possimus dignissimos nostrum. Dolorum dolor nisi id earum deleniti quasi accusamus distinctio! Consequuntur, beatae!', 25, '1/10/2024', '2024-09-26 03:44:28', '2024-09-26 03:44:28'),
(35, 'Jordi Keebler IV', 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus, consectetur vitae quas consequuntur voluptatem quo iure possimus dignissimos nostrum. Dolorum dolor nisi id earum deleniti quasi accusamus distinctio! Consequuntur, beatae!', 25, '1/10/2024', '2024-09-26 03:44:28', '2024-09-26 03:44:28'),
(36, 'Brandt Legros', 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus, consectetur vitae quas consequuntur voluptatem quo iure possimus dignissimos nostrum. Dolorum dolor nisi id earum deleniti quasi accusamus distinctio! Consequuntur, beatae!', 25, '1/10/2024', '2024-09-26 03:44:28', '2024-09-26 03:44:28'),
(37, 'Jayson Boyle', 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus, consectetur vitae quas consequuntur voluptatem quo iure possimus dignissimos nostrum. Dolorum dolor nisi id earum deleniti quasi accusamus distinctio! Consequuntur, beatae!', 25, '1/10/2024', '2024-09-26 03:44:28', '2024-09-26 03:44:28'),
(38, 'Darrick Dibbert', 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus, consectetur vitae quas consequuntur voluptatem quo iure possimus dignissimos nostrum. Dolorum dolor nisi id earum deleniti quasi accusamus distinctio! Consequuntur, beatae!', 25, '1/10/2024', '2024-09-26 03:44:28', '2024-09-26 03:44:28'),
(39, 'Vicky Block', 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus, consectetur vitae quas consequuntur voluptatem quo iure possimus dignissimos nostrum. Dolorum dolor nisi id earum deleniti quasi accusamus distinctio! Consequuntur, beatae!', 25, '1/10/2024', '2024-09-26 03:44:28', '2024-09-26 03:44:28'),
(40, 'Dr. Delpha Bauch', 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus, consectetur vitae quas consequuntur voluptatem quo iure possimus dignissimos nostrum. Dolorum dolor nisi id earum deleniti quasi accusamus distinctio! Consequuntur, beatae!', 25, '1/10/2024', '2024-09-26 03:44:28', '2024-09-26 03:44:28'),
(41, 'Caitlyn Bergstrom', 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus, consectetur vitae quas consequuntur voluptatem quo iure possimus dignissimos nostrum. Dolorum dolor nisi id earum deleniti quasi accusamus distinctio! Consequuntur, beatae!', 25, '1/10/2024', '2024-09-26 03:44:28', '2024-09-26 03:44:28'),
(42, 'Mr. Enoch Leffler', 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus, consectetur vitae quas consequuntur voluptatem quo iure possimus dignissimos nostrum. Dolorum dolor nisi id earum deleniti quasi accusamus distinctio! Consequuntur, beatae!', 25, '1/10/2024', '2024-09-26 03:44:28', '2024-09-26 03:44:28'),
(43, 'Conrad Emmerich', 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus, consectetur vitae quas consequuntur voluptatem quo iure possimus dignissimos nostrum. Dolorum dolor nisi id earum deleniti quasi accusamus distinctio! Consequuntur, beatae!', 25, '1/10/2024', '2024-09-26 03:44:28', '2024-09-26 03:44:28'),
(44, 'Danny Pollich', 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus, consectetur vitae quas consequuntur voluptatem quo iure possimus dignissimos nostrum. Dolorum dolor nisi id earum deleniti quasi accusamus distinctio! Consequuntur, beatae!', 25, '1/10/2024', '2024-09-26 03:44:28', '2024-09-26 03:44:28'),
(45, 'Mrs. Vergie Trantow', 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus, consectetur vitae quas consequuntur voluptatem quo iure possimus dignissimos nostrum. Dolorum dolor nisi id earum deleniti quasi accusamus distinctio! Consequuntur, beatae!', 25, '1/10/2024', '2024-09-26 03:44:28', '2024-09-26 03:44:28'),
(46, 'Miss Vivian Kiehn', 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus, consectetur vitae quas consequuntur voluptatem quo iure possimus dignissimos nostrum. Dolorum dolor nisi id earum deleniti quasi accusamus distinctio! Consequuntur, beatae!', 25, '1/10/2024', '2024-09-26 03:44:28', '2024-09-26 03:44:28'),
(47, 'Prof. Alayna Altenwerth Sr.', 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus, consectetur vitae quas consequuntur voluptatem quo iure possimus dignissimos nostrum. Dolorum dolor nisi id earum deleniti quasi accusamus distinctio! Consequuntur, beatae!', 25, '1/10/2024', '2024-09-26 03:44:28', '2024-09-26 03:44:28'),
(48, 'Madonna White', 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus, consectetur vitae quas consequuntur voluptatem quo iure possimus dignissimos nostrum. Dolorum dolor nisi id earum deleniti quasi accusamus distinctio! Consequuntur, beatae!', 25, '1/10/2024', '2024-09-26 03:44:28', '2024-09-26 03:44:28'),
(49, 'Marcelina McCullough Sr.', 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus, consectetur vitae quas consequuntur voluptatem quo iure possimus dignissimos nostrum. Dolorum dolor nisi id earum deleniti quasi accusamus distinctio! Consequuntur, beatae!', 25, '1/10/2024', '2024-09-26 03:44:28', '2024-09-26 03:44:28'),
(50, 'Ryley Miller', 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus, consectetur vitae quas consequuntur voluptatem quo iure possimus dignissimos nostrum. Dolorum dolor nisi id earum deleniti quasi accusamus distinctio! Consequuntur, beatae!', 25, '1/10/2024', '2024-09-26 03:44:28', '2024-09-26 03:44:28'),
(51, 'test Mitchell MD', 'test, ipsum dolor sit amet consectetur adipisic Consequuntur, beatae!', 25, '1/10/2024', '2024-09-26 03:58:49', '2024-09-26 03:58:49');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `remember_token` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `email_verified_at`, `password`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'Rubie West', 'anjali.ward@example.org', '2024-09-26 03:44:25', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'WIc4OHGyWM', '2024-09-26 03:44:25', '2024-09-26 03:44:25');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `contacts`
--
ALTER TABLE `contacts`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `password_reset_tokens`
--
ALTER TABLE `password_reset_tokens`
  ADD PRIMARY KEY (`email`);

--
-- Indexes for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Indexes for table `tasks`
--
ALTER TABLE `tasks`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `contacts`
--
ALTER TABLE `contacts`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tasks`
--
ALTER TABLE `tasks`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=53;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
