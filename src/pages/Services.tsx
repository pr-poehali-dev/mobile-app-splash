import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Services = () => {
  const services = [
    { 
      icon: 'Trophy', 
      title: 'Турниры', 
      description: 'Регулярные соревнования для всех уровней',
      details: ['Еженедельные турниры', 'Разные форматы игры', 'Призовой фонд', 'Система рейтинга']
    },
    { 
      icon: 'Users', 
      title: 'Тренировки', 
      description: 'Индивидуальные и групповые занятия',
      details: ['Профессиональные тренеры', 'Персональная программа', 'Групповые занятия', 'Видеоанализ игры']
    },
    { 
      icon: 'ShoppingBag', 
      title: 'Магазин', 
      description: 'Профессиональная экипировка',
      details: ['Ракетки и мячи', 'Спортивная одежда', 'Аксессуары', 'Специальные цены для членов клуба']
    },
    { 
      icon: 'Calendar', 
      title: 'Аренда кортов', 
      description: 'Удобное бронирование онлайн',
      details: ['4 профессиональных корта', 'Гибкий график', 'Онлайн-бронирование', 'Льготные часы']
    },
    { 
      icon: 'UserPlus', 
      title: 'Членство', 
      description: 'Абонементы с выгодными условиями',
      details: ['Скидки до 30%', 'Приоритетное бронирование', 'Бесплатные турниры', 'Специальные мероприятия']
    },
    { 
      icon: 'Award', 
      title: 'Корпоративы', 
      description: 'Мероприятия для компаний',
      details: ['Тимбилдинг', 'Корпоративные турниры', 'Аренда всего клуба', 'Кейтеринг']
    },
  ];

  const prices = [
    { category: 'Аренда корта', items: [
      { name: 'Будни (08:00-16:00)', price: '1500 ₽/час' },
      { name: 'Будни (16:00-23:00)', price: '2000 ₽/час' },
      { name: 'Выходные', price: '2500 ₽/час' },
    ]},
    { category: 'Тренировки', items: [
      { name: 'Индивидуальная (60 мин)', price: '3000 ₽' },
      { name: 'Групповая (60 мин)', price: '1500 ₽' },
      { name: 'Абонемент 8 занятий', price: '10000 ₽' },
    ]},
    { category: 'Членство', items: [
      { name: 'Базовое (месяц)', price: '5000 ₽' },
      { name: 'Премиум (месяц)', price: '10000 ₽' },
      { name: 'Годовое', price: '50000 ₽' },
    ]},
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
        <div className="container flex h-16 items-center justify-between px-4">
          <Link to="/" className="flex items-center gap-2">
            <Icon name="CircleDot" className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold">Padel club<br/>Завода имени Ильича</span>
          </Link>
          <Button asChild className="bg-primary hover:bg-primary/90">
            <Link to="/">
              <Icon name="Home" className="mr-2 h-4 w-4" />
              Главная
            </Link>
          </Button>
        </div>
      </header>

      <section className="container px-4 py-12 md:py-16">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Наши услуги</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Всё для вашей игры в одном месте
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto mb-16">
          {services.map((service, idx) => (
            <Card
              key={idx}
              className="hover:shadow-xl transition-all hover:scale-105 animate-slide-up"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <CardHeader>
                <div className="mx-auto mb-4 w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <Icon name={service.icon as any} className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl text-center">{service.title}</CardTitle>
                <CardDescription className="text-base text-center">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.details.map((detail, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <Icon name="Check" className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="max-w-6xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Цены</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {prices.map((priceGroup, idx) => (
              <Card 
                key={idx}
                className="animate-scale-in"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <CardHeader>
                  <CardTitle className="text-2xl text-center">{priceGroup.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {priceGroup.items.map((item, i) => (
                      <div key={i} className="flex justify-between items-center p-3 rounded-lg bg-muted/30">
                        <span className="text-sm font-medium">{item.name}</span>
                        <span className="text-lg font-bold text-primary">{item.price}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-secondary/5">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Преимущества членства</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="Percent" className="h-5 w-5 text-secondary" />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Скидки</p>
                    <p className="text-muted-foreground">До 30% на аренду кортов и тренировки</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="Star" className="h-5 w-5 text-secondary" />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Приоритет</p>
                    <p className="text-muted-foreground">Приоритетное бронирование кортов</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="Trophy" className="h-5 w-5 text-secondary" />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Турниры</p>
                    <p className="text-muted-foreground">Бесплатное участие в клубных турнирах</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="Gift" className="h-5 w-5 text-secondary" />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Бонусы</p>
                    <p className="text-muted-foreground">Специальные предложения и подарки</p>
                  </div>
                </div>
              </div>
              <Button className="w-full mt-8 bg-secondary hover:bg-secondary/90" size="lg">
                <Icon name="UserPlus" className="mr-2 h-5 w-5" />
                Оформить членство
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Services;