MORDECAI - User Management Web Application
--build--from--scratch--

STACK yang dipakai :
- Frontend: React + Tailwind + MUI
- Backend: Express JS dengan Type Safe/TypeScript
- Database: PostgreSQL
- ORM: Prisma
- Deploy: VPS dengan docker compose dan kontainerisasi aplikasi menggunakan docker

1. Cara menjalankan project: 
Local:
> Pertama jalankan service Backend API:
  - Navigasi ke folder root backend dan masukan command "npm run dev"
  - Tunggu sebentar sampai console mengembalikan pesan "🚀 Server is running on port 5001"
  - Jika pesan tadi muncul, berarti backend API sudah berhasil dijalankan dan telah menjalin koneksi dengan database
> Kedua jalankan index frontend
  - Navigasi ke folder root frontend dan masukan command "npm start"
  - Tunggu sebentar sampai aset selesai di kompail dan web akan otomatis terbuka
  - Frontend berhasil ditampilkan dengan baik

Deployment: 
> Setup dockerfile yang diembed pada frontend dan backend
> Setup nginx web server
> Setup docker-composer.prod.yaml
> Lakukan pengecekan pada .env.prod dan pastikan database url sesuai  
> SSH ke vps dan install docker, docker compose, prisma, nodejs, ssl certificate
> Setup domain yang sesuai
> Pastikan domain pada konfigurasi nginx di root project/nginx/sites-available/mordecai.conf sama
> Generate ssl script
> Setup integrasi prisma schema dengan database master
> Jalankan docker composer 

2. Fitur:
> Database
> Backend:
  - Validasi pada Endpoint Create dan Update
  - API Request + Response yang nyaris instan >100 ms
  - Penanganan Error Profesional
> Frontend:
  - UI yang minimalis tapi elegan dengan animasi yang tidak mendramatisir dan smooth
  - Navigasi mudah
  - Aksen warna dasar yang ramah di mata

3. Dokumentasi API menggunakan swagger:
/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       required:
 *         - nama
 *         - email
 *         - nomorTelepon
 *         - departemen
 *       properties:
 *         id:
 *           type: string
 *           description: Unique identifier for the user
 *         nama:
 *           type: string
 *           description: Full name of the user
 *         email:
 *           type: string
 *           format: email
 *           description: Email address of the user
 *         nomorTelepon:
 *           type: string
 *           description: Phone number (minimum 10 digits)
 *         statusAktif:
 *           type: boolean
 *           description: Active status of the user
 *         departemen:
 *           type: string
 *           description: Department of the user
 *         createdAt:
 *           type: string
 *           format: date-time
 *         updatedAt:
 *           type: string
 *           format: date-time
 *
 * @swagger
 * /api/users:
 *   get:
 *     summary: Get all users
 *     tags: [Users]
 *     parameters:
 *       - in: query
 *         name: search
 *         schema:
 *           type: string
 *         description: Search term for filtering users
 *     responses:
 *       200:
 *         description: List of users retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/User'
 *                 count:
 *                   type: number
 *
 *   post:
 *     summary: Create a new user
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - nama
 *               - email
 *               - nomorTelepon
 *               - departemen
 *             properties:
 *               nama:
 *                 type: string
 *               email:
 *                 type: string
 *                 format: email
 *               nomorTelepon:
 *                 type: string
 *               statusAktif:
 *                 type: boolean
 *                 default: true
 *               departemen:
 *                 type: string
 *     responses:
 *       201:
 *         description: User created successfully
 *       400:
 *         description: Validation error
 *
 * /api/users/{id}:
 *   get:
 *     summary: Get user by ID
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: User retrieved successfully
 *       404:
 *         description: User not found
 *
 *   put:
 *     summary: Update user by ID
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nama:
 *                 type: string
 *               email:
 *                 type: string
 *                 format: email
 *               nomorTelepon:
 *                 type: string
 *               statusAktif:
 *                 type: boolean
 *               departemen:
 *                 type: string
 *     responses:
 *       200:
 *         description: User updated successfully
 *       404:
 *         description: User not found
 *
 *   delete:
 *     summary: Delete user by ID
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: User deleted successfully
 *       404:
 *         description: User not found
 */

