import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Tournaments = () => {
  const tournamentBracket = [
    { 
      round: 'Полуфинал', 
      match1: { p1: 'А. Иванов', p2: 'Д. Смирнов', score: '6:3, 6:4', winner: 'p1' }, 
      match2: { p1: 'М. Петрова', p2: 'Е. Козлова', score: '7:5, 6:2', winner: 'p1' } 
    },
    { 
      round: 'Финал', 
      match1: { p1: 'А. Иванов', p2: 'М. Петрова', score: 'TBD', winner: null } 
    },
  ];

  const upcomingTournaments = [
    { name: 'Зимний кубок 2024', date: '15-17 декабря', status: 'active', participants: 16 },
    { name: 'Новогодний турнир', date: '28-30 декабря', status: 'registration', participants: 12 },
    { name: 'Кубок чемпионов', date: '10-12 января', status: 'upcoming', participants: 0 },
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Турниры</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Регулярные соревнования для игроков всех уровней
          </p>
        </div>

        <div className="max-w-6xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Предстоящие турниры</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {upcomingTournaments.map((tournament, idx) => (
              <Card 
                key={idx} 
                className="hover:shadow-xl transition-all hover:scale-105 animate-slide-up"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge 
                      variant={tournament.status === 'active' ? 'default' : 'outline'}
                      className={
                        tournament.status === 'active' ? 'bg-secondary' : 
                        tournament.status === 'registration' ? 'bg-primary' : ''
                      }
                    >
                      {tournament.status === 'active' ? 'В процессе' : 
                       tournament.status === 'registration' ? 'Регистрация' : 'Скоро'}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl">{tournament.name}</CardTitle>
                  <CardDescription className="text-base">
                    <Icon name="Calendar" className="inline h-4 w-4 mr-1" />
                    {tournament.date}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2 text-muted-foreground mb-4">
                    <Icon name="Users" className="h-5 w-5" />
                    <span>
                      {tournament.participants > 0 
                        ? `${tournament.participants} участников` 
                        : 'Ожидается набор'}
                    </span>
                  </div>
                  <Button 
                    className="w-full" 
                    variant={tournament.status === 'upcoming' ? 'outline' : 'default'}
                    disabled={tournament.status === 'upcoming'}
                  >
                    {tournament.status === 'registration' ? 'Зарегистрироваться' : 
                     tournament.status === 'active' ? 'Подробнее' : 'Скоро открытие'}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="max-w-5xl mx-auto">
          <Card className="animate-scale-in">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl">Текущий турнир: Зимний кубок 2024</CardTitle>
              <CardDescription className="text-lg">Турнирная сетка</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-12">
                {tournamentBracket.map((stage, idx) => (
                  <div key={idx} className="animate-slide-up" style={{ animationDelay: `${idx * 0.2}s` }}>
                    <h3 className="text-2xl font-bold mb-6 text-center bg-primary/10 py-3 rounded-lg">
                      {stage.round}
                    </h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <Card className="hover:shadow-lg transition-shadow border-2">
                        <CardContent className="pt-6">
                          <div className="space-y-4">
                            <div className="flex items-center justify-between gap-4">
                              <span className={`font-semibold text-lg ${stage.match1.winner === 'p1' ? 'text-primary' : ''}`}>
                                {stage.match1.p1}
                                {stage.match1.winner === 'p1' && <Icon name="Crown" className="inline ml-2 h-5 w-5 text-primary" />}
                              </span>
                              <Badge variant="outline" className="text-base px-4">VS</Badge>
                              <span className={`font-semibold text-lg ${stage.match1.winner === 'p2' ? 'text-primary' : ''}`}>
                                {stage.match1.p2}
                                {stage.match1.winner === 'p2' && <Icon name="Crown" className="inline ml-2 h-5 w-5 text-primary" />}
                              </span>
                            </div>
                            <div className="text-center text-base font-medium bg-muted py-2 rounded">
                              {stage.match1.score}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                      {stage.match2 && (
                        <Card className="hover:shadow-lg transition-shadow border-2">
                          <CardContent className="pt-6">
                            <div className="space-y-4">
                              <div className="flex items-center justify-between gap-4">
                                <span className={`font-semibold text-lg ${stage.match2.winner === 'p1' ? 'text-primary' : ''}`}>
                                  {stage.match2.p1}
                                  {stage.match2.winner === 'p1' && <Icon name="Crown" className="inline ml-2 h-5 w-5 text-primary" />}
                                </span>
                                <Badge variant="outline" className="text-base px-4">VS</Badge>
                                <span className={`font-semibold text-lg ${stage.match2.winner === 'p2' ? 'text-primary' : ''}`}>
                                  {stage.match2.p2}
                                  {stage.match2.winner === 'p2' && <Icon name="Crown" className="inline ml-2 h-5 w-5 text-primary" />}
                                </span>
                              </div>
                              <div className="text-center text-base font-medium bg-muted py-2 rounded">
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

        <div className="mt-16 max-w-4xl mx-auto">
          <Card className="bg-accent/5">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Правила участия</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="UserPlus" className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Регистрация</p>
                    <p className="text-muted-foreground">Открыта за 2 недели до старта</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="DollarSign" className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Взнос</p>
                    <p className="text-muted-foreground">1500 ₽ за участника</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="Award" className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Призы</p>
                    <p className="text-muted-foreground">Топ-3 получают награды и призы</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="BarChart3" className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Рейтинг</p>
                    <p className="text-muted-foreground">Все участники получают очки</p>
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

export default Tournaments;
