import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [selectedCourt, setSelectedCourt] = useState<number | null>(null);

  const courts = [
    { id: 1, name: 'Корт 1', status: 'available', price: '2000 ₽/час' },
    { id: 2, name: 'Корт 2', status: 'occupied', price: '2000 ₽/час' },
    { id: 3, name: 'Корт 3', status: 'available', price: '2500 ₽/час' },
    { id: 4, name: 'Корт 4', status: 'available', price: '2500 ₽/час' },
  ];

  const players = [
    { id: 1, name: 'Алексей Иванов', points: 1250, rank: 1, wins: 45, losses: 12 },
    { id: 2, name: 'Мария Петрова', points: 1180, rank: 2, wins: 42, losses: 15 },
    { id: 3, name: 'Дмитрий Смирнов', points: 1050, rank: 3, wins: 38, losses: 18 },
    { id: 4, name: 'Елена Козлова', points: 980, rank: 4, wins: 35, losses: 20 },
    { id: 5, name: 'Игорь Волков', points: 920, rank: 5, wins: 32, losses: 22 },
  ];

  const tournamentBracket = [
    { round: 'Полуфинал', match1: { p1: 'А. Иванов', p2: 'Д. Смирнов', score: '6:3, 6:4' }, match2: { p1: 'М. Петрова', p2: 'Е. Козлова', score: '7:5, 6:2' } },
    { round: 'Финал', match1: { p1: 'А. Иванов', p2: 'М. Петрова', score: 'TBD' } },
  ];

  const services = [
    { icon: 'Trophy', title: 'Турниры', description: 'Регулярные соревнования для всех уровней' },
    { icon: 'Users', title: 'Тренировки', description: 'Индивидуальные и групповые занятия' },
    { icon: 'ShoppingBag', title: 'Магазин', description: 'Профессиональная экипировка' },
    { icon: 'Calendar', title: 'Аренда', description: 'Удобное бронирование кортов онлайн' },
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <Icon name="Trophy" className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold">PADEL CLUB</span>
          </div>
          <Button className="bg-primary hover:bg-primary/90">
            <Icon name="Calendar" className="mr-2 h-4 w-4" />
            Забронировать
          </Button>
        </div>
      </header>

      <section className="relative h-[70vh] min-h-[500px] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://cdn.poehali.dev/projects/ca50f167-a69a-4d79-9690-bc5c0f5db47f/files/23d9bd5a-0d56-4a86-b462-21da1ca8679f.jpg"
            alt="Padel Court"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-background" />
        </div>
        <div className="relative z-10 flex h-full items-center justify-center px-4">
          <div className="text-center animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-4">
              PADEL КЛУБ
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
              4 профессиональных корта. Турниры. Тренировки. Рейтинг игроков.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary text-white hover:bg-primary/90 text-lg px-8">
                <Icon name="Calendar" className="mr-2 h-5 w-5" />
                Забронировать корт
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 text-white border-white hover:bg-white/20 text-lg px-8">
                <Icon name="Trophy" className="mr-2 h-5 w-5" />
                Турниры
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="container px-4 py-12 md:py-16">
        <div className="text-center mb-8 animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Наши корты</h2>
          <p className="text-muted-foreground">Выберите корт и забронируйте удобное время</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {courts.map((court, idx) => (
            <Card
              key={court.id}
              className={`cursor-pointer transition-all hover:shadow-lg hover:scale-105 ${
                selectedCourt === court.id ? 'ring-2 ring-primary' : ''
              }`}
              style={{ animationDelay: `${idx * 0.1}s` }}
              onClick={() => setSelectedCourt(court.id)}
            >
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl">{court.name}</CardTitle>
                  <Badge
                    variant={court.status === 'available' ? 'default' : 'secondary'}
                    className={court.status === 'available' ? 'bg-secondary' : ''}
                  >
                    {court.status === 'available' ? 'Свободен' : 'Занят'}
                  </Badge>
                </div>
                <CardDescription className="text-lg font-semibold text-foreground">
                  {court.price}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button
                  className="w-full"
                  disabled={court.status === 'occupied'}
                  variant={court.status === 'available' ? 'default' : 'secondary'}
                >
                  {court.status === 'available' ? 'Забронировать' : 'Недоступен'}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="bg-muted/50 py-12 md:py-16">
        <div className="container px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">Турниры и Рейтинги</h2>
            <p className="text-muted-foreground">Следите за турнирами и достижениями игроков</p>
          </div>
          <Tabs defaultValue="ratings" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
              <TabsTrigger value="ratings" className="text-base">
                <Icon name="BarChart3" className="mr-2 h-4 w-4" />
                Рейтинги
              </TabsTrigger>
              <TabsTrigger value="tournament" className="text-base">
                <Icon name="Trophy" className="mr-2 h-4 w-4" />
                Турнир
              </TabsTrigger>
            </TabsList>

            <TabsContent value="ratings">
              <div className="max-w-3xl mx-auto">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl">Топ-5 игроков</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {players.map((player, idx) => (
                        <div
                          key={player.id}
                          className="flex items-center justify-between p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors animate-fade-in"
                          style={{ animationDelay: `${idx * 0.1}s` }}
                        >
                          <div className="flex items-center gap-4">
                            <div
                              className={`flex items-center justify-center w-10 h-10 rounded-full font-bold ${
                                player.rank === 1
                                  ? 'bg-primary text-white'
                                  : player.rank === 2
                                  ? 'bg-secondary text-white'
                                  : player.rank === 3
                                  ? 'bg-accent text-white'
                                  : 'bg-muted'
                              }`}
                            >
                              {player.rank}
                            </div>
                            <div>
                              <p className="font-semibold text-lg">{player.name}</p>
                              <p className="text-sm text-muted-foreground">
                                Побед: {player.wins} / Поражений: {player.losses}
                              </p>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="text-2xl font-bold text-primary">{player.points}</p>
                            <p className="text-xs text-muted-foreground">очков</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="tournament">
              <div className="max-w-4xl mx-auto">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl">Текущий турнир</CardTitle>
                    <CardDescription>Зимний кубок 2024</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-8">
                      {tournamentBracket.map((stage, idx) => (
                        <div key={idx} className="animate-slide-up" style={{ animationDelay: `${idx * 0.2}s` }}>
                          <h3 className="text-xl font-bold mb-4 text-center">{stage.round}</h3>
                          <div className="grid md:grid-cols-2 gap-4">
                            <Card className="hover:shadow-lg transition-shadow">
                              <CardContent className="pt-6">
                                <div className="space-y-3">
                                  <div className="flex items-center justify-between">
                                    <span className="font-semibold">{stage.match1.p1}</span>
                                    <Badge variant="outline">VS</Badge>
                                    <span className="font-semibold">{stage.match1.p2}</span>
                                  </div>
                                  <div className="text-center text-sm text-muted-foreground">
                                    {stage.match1.score}
                                  </div>
                                </div>
                              </CardContent>
                            </Card>
                            {stage.match2 && (
                              <Card className="hover:shadow-lg transition-shadow">
                                <CardContent className="pt-6">
                                  <div className="space-y-3">
                                    <div className="flex items-center justify-between">
                                      <span className="font-semibold">{stage.match2.p1}</span>
                                      <Badge variant="outline">VS</Badge>
                                      <span className="font-semibold">{stage.match2.p2}</span>
                                    </div>
                                    <div className="text-center text-sm text-muted-foreground">
                                      {stage.match2.score}
                                    </div>
                                  </div>
                                </CardContent>
                              </Card>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section className="container px-4 py-12 md:py-16">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Наши услуги</h2>
          <p className="text-muted-foreground">Всё для вашей игры в одном месте</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, idx) => (
            <Card
              key={idx}
              className="text-center hover:shadow-lg transition-all hover:scale-105 animate-scale-in"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <CardHeader>
                <div className="mx-auto mb-4 w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <Icon name={service.icon as any} className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <CardDescription className="text-base">{service.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      <section className="bg-muted/50 py-12 md:py-16">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">О клубе</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Мы — современный padel клуб с 4 профессиональными кортами. Предлагаем аренду кортов, 
              организацию турниров, индивидуальные и групповые тренировки. У нас удобная система 
              бронирования, рейтинг игроков и магазин спортивного инвентаря.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
              <div className="text-center">
                <p className="text-4xl font-bold text-primary">4</p>
                <p className="text-sm text-muted-foreground">Корта</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold text-secondary">500+</p>
                <p className="text-sm text-muted-foreground">Игроков</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold text-accent">50+</p>
                <p className="text-sm text-muted-foreground">Турниров</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold text-primary">24/7</p>
                <p className="text-sm text-muted-foreground">Работаем</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container px-4 py-12 md:py-16">
        <div className="max-w-3xl mx-auto">
          <Card>
            <CardHeader className="text-center">
              <CardTitle className="text-3xl md:text-4xl font-bold mb-2">Контакты</CardTitle>
              <CardDescription className="text-base">Свяжитесь с нами любым удобным способом</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="MapPin" className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Адрес</p>
                    <p className="text-muted-foreground">г. Москва, ул. Спортивная, 15</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="Phone" className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Телефон</p>
                    <p className="text-muted-foreground">+7 (495) 123-45-67</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="Mail" className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Email</p>
                    <p className="text-muted-foreground">info@padelclub.ru</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="Clock" className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Режим работы</p>
                    <p className="text-muted-foreground">Ежедневно, 24/7</p>
                  </div>
                </div>
              </div>
              <Button className="w-full mt-6 bg-primary hover:bg-primary/90" size="lg">
                <Icon name="Send" className="mr-2 h-5 w-5" />
                Написать нам
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="border-t bg-muted/30 py-8">
        <div className="container px-4 text-center text-muted-foreground">
          <p>© 2024 PADEL CLUB. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
