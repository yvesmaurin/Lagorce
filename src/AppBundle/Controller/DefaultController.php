<?php

namespace AppBundle\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;

class DefaultController extends Controller
{
    /**
     * @Route("/", name="homepage")
     */
    public function indexAction(Request $request)
    {
        // replace this example code with whatever you need
        return $this->render('default/index.html.twig'
            /* Paramètres de la page About de Symfony. Comment par Vincent le 13/7/16
            , [
            'base_dir' => realpath($this->getParameter('kernel.root_dir').'/..'),
        ] */
        );
    }

    /**
     * @Route("/maison", name="maison")
     */
    public function maisonAction(Request $request)
    {
        // replace this example code with whatever you need
        return $this->render('default/maison.html.twig');
    }

    /**
     * @Route("/activités", name="activités")
     */
    public function activitésAction(Request $request)
    {
        // replace this example code with whatever you need
        return $this->render('default/activités.html.twig');
    }

    /**
     * @Route("/contact", name="contact")
     */
    public function contactAction(Request $request)
    {
        // replace this example code with whatever you need
        return $this->render('default/contact.html.twig');
    }

    /**
     * @Route("/notice", name="notice")
     */
    public function noticeAction(Request $request)
    {
        // replace this example code with whatever you need
        return $this->render('default/notice.html.twig');
    }
}
