export interface HttpRequest<TRequest = unknown> {
  body?: TRequest
}

export interface HttpResponse<TResponse = unknown> {
  body?: TResponse
  statusCode: number
}

export interface Controller {
  handle(request: HttpRequest): Promise<HttpResponse>
}
