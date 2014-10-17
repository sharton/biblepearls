if (Entries.find().count() === 0) {
    Entries.insert({
        authorMessage: 'Автор хотел показать важность моливы.',
        userMessage: 'Молитва важна для меня'
    });

    Entries.insert({
        authorMessage: 'Автор говорит о том, Бог верен Своим обещаниям.',
        userMessage: 'Мне нужно больше доверять Богу.'
    });
}
