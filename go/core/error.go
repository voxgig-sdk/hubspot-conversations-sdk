package core

type HubspotConversationsError struct {
	IsHubspotConversationsError bool
	Sdk              string
	Code             string
	Msg              string
	Ctx              *Context
	Result           any
	Spec             any
}

func NewHubspotConversationsError(code string, msg string, ctx *Context) *HubspotConversationsError {
	return &HubspotConversationsError{
		IsHubspotConversationsError: true,
		Sdk:              "HubspotConversations",
		Code:             code,
		Msg:              msg,
		Ctx:              ctx,
	}
}

func (e *HubspotConversationsError) Error() string {
	return e.Msg
}
