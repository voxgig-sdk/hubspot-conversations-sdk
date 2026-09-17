<?php
declare(strict_types=1);

// HubspotConversations SDK context

require_once __DIR__ . '/Control.php';
require_once __DIR__ . '/Operation.php';
require_once __DIR__ . '/Spec.php';
require_once __DIR__ . '/Result.php';
require_once __DIR__ . '/Response.php';
require_once __DIR__ . '/Error.php';
require_once __DIR__ . '/Helpers.php';

class HubspotConversationsContext
{
    public string $id;
    public array $out;
    public mixed $client;
    public ?HubspotConversationsUtility $utility;
    public HubspotConversationsControl $ctrl;
    public array $meta;
    public ?array $config;
    public ?array $entopts;
    public ?array $options;
    public mixed $entity;
    public ?array $shared;
    public array $opmap;
    public array $data;
    public array $reqdata;
    public array $match;
    public array $reqmatch;
    public ?array $point;
    public ?HubspotConversationsSpec $spec;
    public ?HubspotConversationsResult $result;
    public ?HubspotConversationsResponse $response;
    public HubspotConversationsOperation $op;

    public function __construct(array $ctxmap = [], ?self $basectx = null)
    {
        $this->id = 'C' . random_int(10000000, 99999999);
        $this->out = [];

        $this->client = HubspotConversationsHelpers::get_ctx_prop($ctxmap, 'client') ?? ($basectx ? $basectx->client : null);
        $this->utility = HubspotConversationsHelpers::get_ctx_prop($ctxmap, 'utility') ?? ($basectx ? $basectx->utility : null);

        $this->ctrl = new HubspotConversationsControl();
        $ctrl_raw = HubspotConversationsHelpers::get_ctx_prop($ctxmap, 'ctrl');
        if (is_array($ctrl_raw)) {
            if (array_key_exists('throw', $ctrl_raw)) {
                $this->ctrl->throw_err = $ctrl_raw['throw'];
            }
            if (isset($ctrl_raw['explain']) && is_array($ctrl_raw['explain'])) {
                $this->ctrl->explain = $ctrl_raw['explain'];
            }
            if (array_key_exists('actor', $ctrl_raw)) {
                $this->ctrl->actor = $ctrl_raw['actor'];
            }
        } elseif ($basectx !== null && $basectx->ctrl !== null) {
            $this->ctrl = $basectx->ctrl;
        }

        $m = HubspotConversationsHelpers::get_ctx_prop($ctxmap, 'meta');
        $this->meta = is_array($m) ? $m : ($basectx ? $basectx->meta ?? [] : []);

        $cfg = HubspotConversationsHelpers::get_ctx_prop($ctxmap, 'config');
        $this->config = is_array($cfg) ? $cfg : ($basectx ? $basectx->config : null);

        $eo = HubspotConversationsHelpers::get_ctx_prop($ctxmap, 'entopts');
        $this->entopts = is_array($eo) ? $eo : ($basectx ? $basectx->entopts : null);

        $o = HubspotConversationsHelpers::get_ctx_prop($ctxmap, 'options');
        $this->options = is_array($o) ? $o : ($basectx ? $basectx->options : null);

        $e = HubspotConversationsHelpers::get_ctx_prop($ctxmap, 'entity');
        $this->entity = $e ?? ($basectx ? $basectx->entity : null);

        $s = HubspotConversationsHelpers::get_ctx_prop($ctxmap, 'shared');
        $this->shared = is_array($s) ? $s : ($basectx ? $basectx->shared : null);

        $om = HubspotConversationsHelpers::get_ctx_prop($ctxmap, 'opmap');
        $this->opmap = is_array($om) ? $om : ($basectx ? $basectx->opmap ?? [] : []);

        $this->data = HubspotConversationsHelpers::to_map(HubspotConversationsHelpers::get_ctx_prop($ctxmap, 'data')) ?? [];
        $this->reqdata = HubspotConversationsHelpers::to_map(HubspotConversationsHelpers::get_ctx_prop($ctxmap, 'reqdata')) ?? [];
        $this->match = HubspotConversationsHelpers::to_map(HubspotConversationsHelpers::get_ctx_prop($ctxmap, 'match')) ?? [];
        $this->reqmatch = HubspotConversationsHelpers::to_map(HubspotConversationsHelpers::get_ctx_prop($ctxmap, 'reqmatch')) ?? [];

        $pt = HubspotConversationsHelpers::get_ctx_prop($ctxmap, 'point');
        $this->point = is_array($pt) ? $pt : ($basectx ? $basectx->point : null);

        $sp = HubspotConversationsHelpers::get_ctx_prop($ctxmap, 'spec');
        $this->spec = ($sp instanceof HubspotConversationsSpec) ? $sp : ($basectx ? $basectx->spec : null);

        $r = HubspotConversationsHelpers::get_ctx_prop($ctxmap, 'result');
        $this->result = ($r instanceof HubspotConversationsResult) ? $r : ($basectx ? $basectx->result : null);

        $rp = HubspotConversationsHelpers::get_ctx_prop($ctxmap, 'response');
        $this->response = ($rp instanceof HubspotConversationsResponse) ? $rp : ($basectx ? $basectx->response : null);

        $opname = HubspotConversationsHelpers::get_ctx_prop($ctxmap, 'opname') ?? '';
        $this->op = $this->resolve_op($opname);
    }

    public function resolve_op(string $opname): HubspotConversationsOperation
    {
        // Cache key is `<entity>:<opname>` so two entities with the same op
        // (e.g. both have a "list") get distinct cached Operations. Keying
        // on opname alone caused the first-resolved entity's points to be
        // served to every subsequent entity's call.
        $entname = (is_object($this->entity) && method_exists($this->entity, 'get_name'))
            ? $this->entity->get_name()
            : '_';
        $cacheKey = $entname . ':' . $opname;

        if (isset($this->opmap[$cacheKey])) {
            return $this->opmap[$cacheKey];
        }
        if ($opname === '') {
            return new HubspotConversationsOperation([]);
        }

        $opcfg = \Voxgig\Struct\Struct::getpath($this->config, "entity.{$entname}.op.{$opname}");

        $input = ($opname === 'update' || $opname === 'create') ? 'data' : 'match';

        $points = [];
        if (is_array($opcfg)) {
            $t = \Voxgig\Struct\Struct::getprop($opcfg, 'points');
            if (is_array($t)) {
                $points = $t;
            }
        }

        $op = new HubspotConversationsOperation([
            'entity' => $entname,
            'name' => $opname,
            'input' => $input,
            'points' => $points,
        ]);
        $this->opmap[$cacheKey] = $op;
        return $op;
    }

    public function make_error(string $code, string $msg): HubspotConversationsError
    {
        return new HubspotConversationsError($code, $msg, $this);
    }
}
