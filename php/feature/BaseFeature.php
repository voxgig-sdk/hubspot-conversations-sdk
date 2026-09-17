<?php
declare(strict_types=1);

// HubspotConversations SDK base feature

class HubspotConversationsBaseFeature
{
    public string $version;
    public string $name;
    public bool $active;

    // Positions this feature when added via the client `extend` option:
    // "__before__" / "__after__" / "__replace__" name an already-added
    // feature (mirrors the ts feature `_options`). Declared so setting it
    // on an extension instance avoids the dynamic-property deprecation.
    public ?array $_options = null;

    public function __construct()
    {
        $this->version = '0.0.1';
        $this->name = 'base';
        $this->active = true;
    }

    public function get_version(): string { return $this->version; }
    public function get_name(): string { return $this->name; }
    public function get_active(): bool { return $this->active; }

    public function init(HubspotConversationsContext $ctx, array $options): void {}
    public function PostConstruct(HubspotConversationsContext $ctx): void {}
    public function PostConstructEntity(HubspotConversationsContext $ctx): void {}
    public function SetData(HubspotConversationsContext $ctx): void {}
    public function GetData(HubspotConversationsContext $ctx): void {}
    public function GetMatch(HubspotConversationsContext $ctx): void {}
    public function SetMatch(HubspotConversationsContext $ctx): void {}
    public function PrePoint(HubspotConversationsContext $ctx): void {}
    public function PreSpec(HubspotConversationsContext $ctx): void {}
    public function PreRequest(HubspotConversationsContext $ctx): void {}
    public function PreResponse(HubspotConversationsContext $ctx): void {}
    public function PreResult(HubspotConversationsContext $ctx): void {}
    public function PreDone(HubspotConversationsContext $ctx): void {}
    public function PreUnexpected(HubspotConversationsContext $ctx): void {}
}
