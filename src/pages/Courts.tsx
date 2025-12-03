import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Courts = () => {
  const [selectedCourt, setSelectedCourt] = useState<number | null>(null);

  const courts = [
    { id: 1, name: 'Корт 1', status: 'available', price: '2000 ₽/час', features: ['Панорамное остекление', 'LED освещение', 'Трибуны на 50 мест'] },
    { id: 2, name: 'Корт 2', status: 'occupied', price: '2000 ₽/час', features: ['Крытый корт', 'Профессиональное покрытие', 'Кондиционирование'] },
    { id: 3, name: 'Корт 3', status: 'available', price: '2500 ₽/час', features: ['VIP корт', 'Раздевалки', 'Душевые'] },
    { id: 4, name: 'Корт 4', status: 'available', price: '2500 ₽/час', features: ['Открытый корт', 'Вечернее освещение', 'Зона отдыха'] },
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
        <div className="container flex h-16 items-center justify-between px-4">
          <Link to="/" className="flex items-center gap-2">
            <Icon name="Trophy" className="h-8 w-8 text-primary" />
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Наши корты</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            4 профессиональных корта с современным оборудованием и комфортными условиями для игры
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {courts.map((court, idx) => (
            <Card
              key={court.id}
              className={`cursor-pointer transition-all hover:shadow-xl hover:scale-[1.02] animate-slide-up ${
                selectedCourt === court.id ? 'ring-2 ring-primary' : ''
              }`}
              style={{ animationDelay: `${idx * 0.1}s` }}
              onClick={() => setSelectedCourt(court.id)}
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <CardTitle className="text-2xl">{court.name}</CardTitle>
                  <Badge
                    variant={court.status === 'available' ? 'default' : 'secondary'}
                    className={court.status === 'available' ? 'bg-secondary text-lg px-4 py-1' : 'text-lg px-4 py-1'}
                  >
                    {court.status === 'available' ? 'Свободен' : 'Занят'}
                  </Badge>
                </div>
                <CardDescription className="text-2xl font-bold text-primary">
                  {court.price}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-6">
                  {court.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-muted-foreground">
                      <Icon name="Check" className="h-4 w-4 text-primary flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                <Button
                  className="w-full"
                  disabled={court.status === 'occupied'}
                  variant={court.status === 'available' ? 'default' : 'secondary'}
                  size="lg"
                >
                  <Icon name="Calendar" className="mr-2 h-5 w-5" />
                  {court.status === 'available' ? 'Забронировать' : 'Недоступен'}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 max-w-4xl mx-auto">
          <Card className="bg-primary/5">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Правила бронирования</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="Clock" className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Минимальное время</p>
                    <p className="text-muted-foreground">Бронирование от 1 часа</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="CreditCard" className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Оплата</p>
                    <p className="text-muted-foreground">Наличные или карта на месте</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="Calendar" className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Отмена</p>
                    <p className="text-muted-foreground">Бесплатная отмена за 24 часа</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="Users" className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Вместимость</p>
                    <p className="text-muted-foreground">До 4 игроков на корте</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Courts;
