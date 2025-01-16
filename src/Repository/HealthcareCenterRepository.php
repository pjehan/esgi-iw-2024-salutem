<?php

namespace App\Repository;

use App\Entity\HealthcareCenter;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<HealthcareCenter>
 */
class HealthcareCenterRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, HealthcareCenter::class);
    }

    public function findOneWithDoctors(string $slug)
    {
        return $this->createQueryBuilder('hc')
            ->addSelect('d')
            ->addSelect('s')
            ->leftJoin('hc.doctors', 'd')
            ->leftJoin('d.skills', 's')
            ->andWhere('hc.slug = :slug')
            ->setParameter('slug', $slug)
            ->getQuery()
            ->getOneOrNullResult();
    }
}
