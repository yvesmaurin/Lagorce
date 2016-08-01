<?php

namespace AppBundle\Controller;

use AppBundle\Entity\GuestBook;
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
        return $this->render('default/activites.html.twig');
    }

    /**
     * @Route("/contact/{page}", name="contact", defaults={"page": 1}, requirements={"page": "\d+"})
     */
    public function contactAction(Request $request, $page)
    {
        $maxArticles = 5;

        $articles_count = count($this->getDoctrine()
            ->getRepository('AppBundle:GuestBook')
            ->findAll());

        $pagination = array(
            'page' => $page,
            'route' => 'contact',
            'pages_count' => ceil($articles_count / $maxArticles),
            'route_params' => array()
        );

        $guestBooks = $this->getDoctrine()->getRepository('AppBundle:GuestBook')
            ->getList($page, $maxArticles);

        return $this->render('default/contact.html.twig', array(
            'guestBooks' => $guestBooks,
            'pagination' => $pagination
        ));
    }

    /**
     * @Route("/notice", name="notice")
     */
    public function noticeAction(Request $request)
    {
        // replace this example code with whatever you need
        return $this->render('default/notice.html.twig');
    }

    /**
     * @Route("/contact/add", name="contact_add")
     */
    public function addContactAction(Request $request)
    {
        if ($request->getMethod() == "POST") {
            $em = $this->getDoctrine()->getManager();

            $guestBook = new GuestBook();
            $guestBook->setNom($request->get('nom'));
            $guestBook->setCommentaire($request->get('commentaire'));

            $em->persist($guestBook);
            $em->flush();

            $sujet = 'Un nouveau commentaire à propos du site';
            $message = 'De ' . $request->get('nom') . ' :\n' . $request->get('commentaire');
            $message .= '\n La validation se fera sur la page d\'administration du site.';
            $destinataire = "vi.berniere@gmail.com";
            $headers = "From: <jean-pierre.ozil@liondor-lagorce.fr>\n";
            $headers .= "Reply-To: jean-pierre.ozil@liondor-lagorce.fr\n";
            $headers .= "MIME-Version: 1.0\r\n";
            $headers .= "Content-Type: text/plain; charset=\"iso-8859-1\"";

            if (mail($destinataire, $sujet, $message, $headers)) {
                $this->addFlash('message', 'Votre commentaire a bien été envoyé');
            } else {
                $this->addFlash('message', "Votre commentaire n'a pas pu être envoyé, recommencez ultérieurement, merci");

            }
        }

        return $this->redirect($this->generateUrl('contact'));
    }
}
