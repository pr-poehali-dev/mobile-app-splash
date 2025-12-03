import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';

const Contacts = () => {
  const contactInfo = [
    { 
      icon: 'MapPin', 
      title: 'Адрес', 
      content: 'г. Москва, ул. Спортивная, 15', 
      color: 'primary' 
    },
    { 
      icon: 'Phone', 
      title: 'Телефон', 
      content: '+7 (495) 123-45-67', 
      color: 'secondary' 
    },
    { 
      icon: 'Mail', 
      title: 'Email', 
      content: 'info@padelclub.ru', 
      color: 'accent' 
    },
    { 
      icon: 'Clock', 
      title: 'Режим работы', 
      content: 'Ежедневно, 24/7', 
      color: 'primary' 
    },
  ];

  const socialLinks = [
    { icon: 'Instagram', name: 'Instagram', link: '@padelclub_illich' },
    { icon: 'Facebook', name: 'Facebook', link: 'Padel Club Завода' },
    { icon: 'MessageCircle', name: 'Telegram', link: '@padelclub_illich' },
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Контакты</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Свяжитесь с нами любым удобным способом
          </p>
        </div>

        <div className="max-w-6xl mx-auto mb-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, idx) => (
              <Card 
                key={idx}
                className="text-center hover:shadow-lg transition-all hover:scale-105 animate-slide-up"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <CardHeader>
                  <div className={`mx-auto mb-4 w-16 h-16 rounded-full bg-${info.color}/10 flex items-center justify-center`}>
                    <Icon name={info.icon as any} className={`h-8 w-8 text-${info.color}`} />
                  </div>
                  <CardTitle className="text-lg mb-2">{info.title}</CardTitle>
                  <p className="text-muted-foreground">{info.content}</p>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 mb-16">
          <Card className="animate-scale-in">
            <CardHeader>
              <CardTitle className="text-2xl">Напишите нам</CardTitle>
              <CardDescription>Мы ответим в ближайшее время</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Ваше имя</Label>
                  <Input id="name" placeholder="Иван Иванов" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="ivan@example.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Телефон</Label>
                  <Input id="phone" type="tel" placeholder="+7 (999) 123-45-67" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Сообщение</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Расскажите, чем мы можем помочь..." 
                    rows={4}
                  />
                </div>
                <Button className="w-full bg-primary hover:bg-primary/90" size="lg">
                  <Icon name="Send" className="mr-2 h-5 w-5" />
                  Отправить сообщение
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-8">
            <Card className="animate-scale-in" style={{ animationDelay: '0.1s' }}>
              <CardHeader>
                <CardTitle className="text-2xl">Как нас найти</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-video bg-muted rounded-lg flex items-center justify-center mb-4">
                  <div className="text-center">
                    <Icon name="MapPin" className="h-12 w-12 text-primary mx-auto mb-2" />
                    <p className="text-muted-foreground">Карта загружается...</p>
                  </div>
                </div>
                <div className="space-y-3 text-muted-foreground">
                  <p className="flex items-start gap-2">
                    <Icon name="Navigation" className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>5 минут пешком от метро "Завод имени Ильича"</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <Icon name="Car" className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Бесплатная парковка для посетителей</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <Icon name="Bus" className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Автобусы: 123, 456 до остановки "Спортивная"</span>
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-secondary/5 animate-scale-in" style={{ animationDelay: '0.2s' }}>
              <CardHeader>
                <CardTitle className="text-2xl">Мы в соцсетях</CardTitle>
                <CardDescription>Следите за новостями и акциями</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {socialLinks.map((social, idx) => (
                    <Button 
                      key={idx}
                      variant="outline" 
                      className="w-full justify-start text-base hover:bg-secondary/10"
                      size="lg"
                    >
                      <Icon name={social.icon as any} className="mr-3 h-5 w-5" />
                      <div className="text-left">
                        <p className="font-semibold">{social.name}</p>
                        <p className="text-xs text-muted-foreground">{social.link}</p>
                      </div>
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-primary/5">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Часто задаваемые вопросы</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 rounded-lg bg-background">
                  <p className="font-semibold mb-2">Как забронировать корт?</p>
                  <p className="text-muted-foreground">Позвоните нам по телефону или оставьте заявку на сайте. Также можно забронировать корт при личном посещении клуба.</p>
                </div>
                <div className="p-4 rounded-lg bg-background">
                  <p className="font-semibold mb-2">Есть ли прокат инвентаря?</p>
                  <p className="text-muted-foreground">Да, у нас есть прокат ракеток и мячей. Стоимость проката — 300 ₽ в час.</p>
                </div>
                <div className="p-4 rounded-lg bg-background">
                  <p className="font-semibold mb-2">Можно ли отменить бронирование?</p>
                  <p className="text-muted-foreground">Да, отмена бесплатна при уведомлении за 24 часа до начала игры.</p>
                </div>
                <div className="p-4 rounded-lg bg-background">
                  <p className="font-semibold mb-2">Проводятся ли занятия для начинающих?</p>
                  <p className="text-muted-foreground">Конечно! У нас есть групповые и индивидуальные тренировки для игроков любого уровня.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Contacts;
