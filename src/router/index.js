import { Router } from "express"
const router = Router()

router.get('/', (req, res) => res.render('index',{title: 'Mi curriculum'}))
router.get('/habilidades', (req, res) => res.render('habilidades',{title:'Habilidades'}))
router.get('/proyectos', (req, res) => res.render('proyectos',{title:'Proyectos'}))
router.get('/experiencia', (req, res) => res.render('experiencia',{title:'EXperiencia'}))
//router.get('/about', (req, res) => res.render('about',{title:'Sobre Nosotros'}))
router.get('/contact', (req, res) => res.render('contact',{title: 'Contáctanos'}))

export default router