{
{}
$requestFactory = new Http\Factory\Guzzle\RequestFactory()
$streamFactory = new Http\Factory\Guzzle\StreamFactory();
$client = new Http\Adapter\Guzzle6\Client();
$apiClient = new \TgBotApi\BotApiBase\ApiClient($requestFactory, $streamFactory, $client);
$bot = new \TgBotApi\BotApiBase\BotApiComplete($botKey, $apiClient, new \TgBotApi\BotApiBase\BotApi\BotApiNormalizer());
$bot->sendMessage(\TgBotApi\BotApiBase\Method\SendMessageMethod::create($userId, 'Hi'))
\\
}
}
