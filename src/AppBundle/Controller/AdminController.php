<?php

namespace AppBundle\Controller;

use AppBundle\Entity\GuestBook;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;

class AdminController extends Controller
{
    /**
     * @Route("/admin/{page}", name="admin", defaults={"page": 1}, requirements={"page": "\d+"})
     */
    public function contactAction(Request $request, $page)
    {
        $maxArticles = 10;

        $articles_count = count($this->getDoctrine()
            ->getRepository('AppBundle:GuestBook')
            ->findAll());

        $pagination = array(
            'page' => $page,
            'route' => 'admin',
            'pages_count' => ceil($articles_count / $maxArticles),
            'route_params' => array()
        );

        $guestBooks = $this->getDoctrine()->getRepository('AppBundle:GuestBook')
            ->getAdminList($page, $maxArticles);

        return $this->render('admin/admin.html.twig', array(
            'guestBooks' => $guestBooks,
            'pagination' => $pagination
        ));
    }

    /**
     * @Route("/admin/contact/edit/{idAvis}", name="admin_contact_edit", requirements={"idAvis": "\d+"})
     */
    public function editContactAction(Request $request, $idAvis)
    {
        $em = $this->getDoctrine()->getManager();

        $guestBook = $this->getDoctrine()->getRepository('AppBundle:GuestBook')->find($idAvis);
        $guestBook->setVisible(!$guestBook->getVisible());

        $em->persist($guestBook);
        $em->flush();

        $this->addFlash('message', 'Ce commentaire a bien été modifié');

        return $this->redirectToRoute('admin');
    }

    /**
     * @Route("/admin/contact/delete/{idAvis}", name="admin_contact_delete", requirements={"idAvis": "\d+"})
     */
    public function deleteContactAction(Request $request, $idAvis)
    {
        $em = $this->getDoctrine()->getManager();

        $guestBook = $this->getDoctrine()->getRepository('AppBundle:GuestBook')->find($idAvis);

        $em->remove($guestBook);
        $em->flush();

        $this->addFlash('message', 'Ce commentaire a bien été supprimé');

        return $this->redirectToRoute('admin');
    }
}
