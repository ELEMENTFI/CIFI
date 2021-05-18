public static void main(String[] args) {
        ApiContextInitializer.init();
        TelegramBotApi telegramBotApi = new TelegramBotApi();
        try {
            telegramBotApi.registerBot(Bot.getBot());
        } catch (TelegramApiRequestException e) {
            e.printStackTrace();
        }
}