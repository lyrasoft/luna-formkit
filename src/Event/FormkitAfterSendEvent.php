<?php

declare(strict_types=1);

namespace Lyrasoft\Formkit\Event;

use Lyrasoft\Formkit\Entity\Formkit;
use Lyrasoft\Formkit\Entity\FormkitResponse;
use Lyrasoft\Luna\Entity\User;
use Windwalker\Core\Mailer\MailMessage;
use Windwalker\Data\Collection;
use Windwalker\Event\AbstractEvent;

/**
 * The ContactBeforeSendEvent class.
 */
class FormkitAfterSendEvent extends AbstractEvent
{
    protected MailMessage $message;

    protected Formkit $item;

    protected FormkitResponse $res;

    /**
     * @var Collection<User>
     */
    protected Collection $users;

    /**
     * @return string
     */
    public function getType(): string
    {
        return $this->type;
    }

    /**
     * @param string $type
     *
     * @return  static  Return self to support chaining.
     */
    public function setType(string $type): static
    {
        $this->type = $type;

        return $this;
    }

    /**
     * @return MailMessage
     */
    public function getMessage(): MailMessage
    {
        return $this->message;
    }

    /**
     * @param MailMessage $message
     *
     * @return  static  Return self to support chaining.
     */
    public function setMessage(MailMessage $message): static
    {
        $this->message = $message;

        return $this;
    }

    /**
     * @return Collection<User>
     */
    public function getUsers(): Collection
    {
        return $this->users;
    }

    /**
     * @param Collection $users
     *
     * @return  static  Return self to support chaining.
     */
    public function setUsers(Collection $users): static
    {
        $this->users = $users;

        return $this;
    }

    public function getRes(): FormkitResponse
    {
        return $this->res;
    }

    public function setRes(FormkitResponse $res): static
    {
        $this->res = $res;

        return $this;
    }

    public function getItem(): Formkit
    {
        return $this->item;
    }

    public function setItem(Formkit $item): static
    {
        $this->item = $item;

        return $this;
    }
}
